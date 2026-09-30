(function () {
  "use strict";
  var brain = window.ZionCoreBrain;
  if (!brain) return;
  function byId(id) { return document.getElementById(id); }
  function escapeHtml(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function renderJournal() {
    var box = byId("journal-list");
    if (!box) return;
    if (!brain.state.journal.length) { box.textContent = "No entries yet."; return; }
    box.innerHTML = brain.state.journal.slice(0, 40).map(function (item) {
      return '<div class="item"><small>' + item.at + "</small><div>" + escapeHtml(item.text) + "</div></div>";
    }).join("");
  }
  function renderIntentions() {
    var box = byId("intent-list");
    if (!box) return;
    if (!brain.state.intentions.length) { box.textContent = "No intentions yet."; return; }
    box.innerHTML = brain.state.intentions.map(function (item) {
      return '<div class="item"><button type="button" data-toggle="' + item.id + '">' + (item.done ? "done" : "open") + "</button> " + escapeHtml(item.text) + "</div>";
    }).join("");
  }
  function renderConfig() {
    var view = byId("cfg-view");
    var name = byId("cfg-name");
    var focus = byId("cfg-focus");
    if (name) name.value = brain.state.name || "";
    if (focus) focus.value = brain.state.focus || "";
    if (view) view.textContent = JSON.stringify({ name: brain.state.name, focus: brain.state.focus, rewrites: brain.state.rewrites.slice(0, 8) }, null, 2);
  }
  document.querySelectorAll("[data-panel]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll("[data-panel]").forEach(function (b) { b.classList.remove("on"); });
      document.querySelectorAll(".panel").forEach(function (p) { p.classList.remove("on"); });
      btn.classList.add("on");
      var panel = byId("panel-" + btn.getAttribute("data-panel"));
      if (panel) panel.classList.add("on");
    });
  });
  var journalSave = byId("journal-save");
  if (journalSave) journalSave.addEventListener("click", function () {
    var input = byId("journal-input");
    var entry = brain.addJournal(input && input.value);
    if (entry && input) input.value = "";
    renderJournal(); brain.log("Journal entry saved.");
  });
  var intentSave = byId("intent-save");
  if (intentSave) intentSave.addEventListener("click", function () {
    var input = byId("intent-input");
    var entry = brain.addIntention(input && input.value);
    if (entry && input) input.value = "";
    renderIntentions(); brain.log("Intention added.");
  });
  var intentList = byId("intent-list");
  if (intentList) intentList.addEventListener("click", function (event) {
    var id = event.target && event.target.getAttribute("data-toggle");
    if (!id) return;
    brain.toggleIntention(id); renderIntentions();
  });
  var cfgSave = byId("cfg-save");
  if (cfgSave) cfgSave.addEventListener("click", function () {
    brain.rewriteConfig({ name: (byId("cfg-name") || {}).value, focus: (byId("cfg-focus") || {}).value });
    renderConfig();
  });
  brain.log("Kernel attached.");
  brain.setStatus("BOOT");
  Promise.all([
    fetch("data/manifest.json").then(function (r) { return r.ok ? r.json() : null; }),
    fetch("data/archive/dropped-catalog.json").then(function (r) { return r.ok ? r.json() : null; })
  ]).then(function (pair) {
    var manifest = pair[0] || { scripts: [] };
    var catalog = pair[1] || { records: [] };
    var mods = manifest.scripts || [];
    var recs = catalog.records || [];
    var modulesEl = document.getElementById("m-modules");
    var archiveEl = document.getElementById("m-archive");
    if (modulesEl) modulesEl.textContent = String(mods.length);
    if (archiveEl) archiveEl.textContent = String(recs.length);
    var recordsView = document.getElementById("records-view");
    if (recordsView) recordsView.textContent = recs.map(function (row) {
      return row.id + " \u2014 " + row.kind + " \u2014 " + row.status + "\n  " + row.note;
    }).join("\n\n");
    brain.log("Manifest loaded. " + mods.length + " registered modules.");
    brain.log("Archive catalog loaded. " + recs.length + " dropped records held, not executed.");
    brain.setStatus("READY");
    brain.metrics();
  }).catch(function () {
    brain.log("Manifest or archive missing.");
    brain.setStatus("READY");
  });
  renderJournal(); renderIntentions(); renderConfig(); brain.metrics();
})();
