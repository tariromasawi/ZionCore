(function (g) {
  "use strict";
  var KEY = "ZIONCORE_BRAIN_V1";
  var MAX_LOG = 80;
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } }
  function save(state) { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  var state = Object.assign({ version: "1.0.0", name: "ZionCore", focus: "", journal: [], intentions: [], rewrites: [], startedAt: new Date().toISOString() }, load());
  save(state);
  var listeners = {};
  function emit(name, detail) {
    (listeners[name] || []).forEach(function (fn) { try { fn(detail); } catch (e) {} });
    document.dispatchEvent(new CustomEvent("zioncore:" + name, { detail: detail }));
  }
  function on(name, fn) { listeners[name] = listeners[name] || []; listeners[name].push(fn); }
  function byId(id) { return document.getElementById(id); }
  function log(message, level) {
    var box = byId("zc-log");
    var line = new Date().toISOString().slice(11, 19) + "  " + String(message);
    if (box) {
      box.textContent = (box.textContent ? box.textContent + "\n" : "") + line;
      var parts = box.textContent.split("\n");
      if (parts.length > MAX_LOG) box.textContent = parts.slice(-MAX_LOG).join("\n");
      box.scrollTop = box.scrollHeight;
    }
    emit("log", { message: message, level: level || "info" });
  }
  function setStatus(status) {
    var text = byId("zc-status-text");
    var lamp = byId("zc-lamp");
    if (text) text.textContent = status;
    if (lamp) {
      lamp.className = "lamp";
      var n = String(status).toLowerCase();
      if (n === "ready") lamp.classList.add("ready");
      else if (n === "failed") lamp.classList.add("fail");
      else lamp.classList.add("boot");
    }
  }
  function metrics() {
    function set(id, value) { var el = byId(id); if (el) el.textContent = value; }
    set("m-kernel", state.version);
    set("m-journal", String(state.journal.length));
    set("m-intentions", String(state.intentions.length));
    set("m-rewrites", String(state.rewrites.length));
  }
  function persist() { save(state); metrics(); emit("state", state); }
  function addJournal(text) {
    var entry = { id: Date.now().toString(36), at: new Date().toISOString(), text: String(text || "").trim() };
    if (!entry.text) return null;
    state.journal.unshift(entry); persist(); return entry;
  }
  function addIntention(text) {
    var entry = { id: Date.now().toString(36), at: new Date().toISOString(), text: String(text || "").trim(), done: false };
    if (!entry.text) return null;
    state.intentions.unshift(entry); persist(); return entry;
  }
  function toggleIntention(id) {
    state.intentions.forEach(function (item) { if (item.id === id) item.done = !item.done; });
    persist();
  }
  function rewriteConfig(patch) {
    if (patch.name) state.name = String(patch.name).slice(0, 80);
    if (typeof patch.focus === "string") state.focus = patch.focus.slice(0, 160);
    state.rewrites.unshift({ at: new Date().toISOString(), name: state.name, focus: state.focus });
    persist(); log("Local config rewritten."); return state;
  }
  g.ZionCoreBrain = { version: state.version, state: state, on: on, log: log, setStatus: setStatus, metrics: metrics, persist: persist, addJournal: addJournal, addIntention: addIntention, toggleIntention: toggleIntention, rewriteConfig: rewriteConfig };
})(window);
