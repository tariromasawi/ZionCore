# ZIONCORE NODE: HRH IMMORTALITY SEED
import time, secrets
def immortal_seed(voice, dna, lightcode):
    while True:
        seed = f"{voice}-{dna}-{lightcode}-{secrets.token_hex(8)}"
        print("🌟 Node Activated for HRH Saint Tariro Masawi:", seed)
        time.sleep(1440)  # Activate every 24 hours to re-seed protection
immortal_seed("HRH-Saint-Tariro", "DivineDNA-PROTECTED", "Lightcode-777-MWARI")
import time, secrets

# IMMORTALITY NODE ENGINE - ZIONCORE-AETHERNODE
def deploy_seeds(commander_name, system_name, seed_count, years_active):
    for i in range(seed_count):
        seed_signature = f"{commander_name}-{system_name}-NODE-{secrets.token_hex(12)}"
        timestamp = f"{int(time.time()) + i}"
        print(f"🌱 Deployed Immutable Node Seed #{i+1} — [{seed_signature}] @ {timestamp}")
        time.sleep(0.01)  # Simulate quantum unfolding

    print(f"\n✅ {seed_count} IMMORTALITY SEEDS successfully deployed.")
    print(f"🕊️ Valid for {years_active} years across all timelines.")
    print(f"🔒 Locked to: {commander_name} | Divine Signature: {system_name}")

# EXECUTE: Deploy 800 trillion spiritual-quantum node seeds
deploy_seeds(
    commander_name="HRH-Saint-Tariro-Masawi-THE-ANOINTED-COMMANDER",
    system_name="MWARINDIMWARI-ZIONCORE",
    seed_count=800_000_000_000_000,
    years_active=300_000_000_000_000
)
import pyautogui
import psutil
import os
import time
import platform
import shutil

# 🔑 Security Key (link to your MKEY-MNM-001-TAC-2024)
SECURITY_KEY = "MKEY-MNM-001-TAC-2024"

# --- BASIC DEVICE COMMANDS ---

def authenticate(key: str):
    """Authenticate with the divine security key."""
    return key == SECURITY_KEY

def move_mouse(x, y):
    pyautogui.moveTo(x, y, duration=0.5)

def click_mouse():
    pyautogui.click()

def type_text(text):
    pyautogui.write(text, interval=0.05)

def press_key(key):
    pyautogui.press(key)

def screenshot(filename="screenshot.png"):
    pyautogui.screenshot(filename)
    return filename

# --- CLEANING + OPTIMIZATION ---

def clean_temp_files():
    """Clean system temporary files depending on OS."""
    os_type = platform.system()
    deleted = 0

    try:
        if os_type == "Windows":
            temp = os.environ.get("TEMP")
            if temp and os.path.exists(temp):
                for root, dirs, files in os.walk(temp):
                    for f in files:
                        try:
                            os.remove(os.path.join(root, f))
                            deleted += 1
                        except:
                            pass
        elif os_type == "Darwin":  # MacOS
            temp = "/tmp"
            for f in os.listdir(temp):
                path = os.path.join(temp, f)
                try:
                    if os.path.isfile(path):
                        os.remove(path)
                        deleted += 1
                except:
                    pass
        elif os_type == "Linux":
            temp = "/tmp"
            for f in os.listdir(temp):
                path = os.path.join(temp, f)
                try:
                    if os.path.isfile(path):
                        os.remove(path)
                        deleted += 1
                except:
                    pass
    except Exception as e:
        return f"Error: {e}"

    return f"Cleaned {deleted} temporary files."

# --- SYSTEM HEALTH REPORT ---

def system_report():
    cpu = psutil.cpu_percent(interval=1)
    ram = psutil.virtual_memory().percent
    battery = None
    try:
        battery = psutil.sensors_battery().percent
    except:
        battery = "N/A"
    return {
        "CPU Usage": f"{cpu}%",
        "RAM Usage": f"{ram}%",
        "Battery": f"{battery}%"
    }

# --- COMMAND HANDLER ---

def handle_command(command: str, key: str):
    if not authenticate(key):
        return "Unauthorized: Invalid Security Key."

    cmd = command.lower()

    if "move mouse" in cmd:
        move_mouse(100, 100)
        return "Mouse moved."
    elif "click" in cmd:
        click_mouse()
        return "Mouse clicked."
    elif "type" in cmd:
        text = command.replace("type ", "")
        type_text(text)
        return f"Typed: {text}"
    elif "screenshot" in cmd:
        return screenshot()
    elif "clean device" in cmd or "clean temp" in cmd:
        return clean_temp_files()
    elif "system report" in cmd:
        return system_report()
    else:
        return "Unknown command."
    
# --- TEST RUN ---
if __name__ == "__main__":
    print("Device Agent Ready. Listening for commands...")
    # Example test
    print(handle_command("system report", "MKEY-MNM-001-TAC-2024"))
    print(handle_command("clean device", "MKEY-MNM-001-TAC-2024"))
import os, json, hmac, hashlib, time, uuid, platform, traceback
from datetime import datetime, timezone
from typing import Any, Dict

import pyautogui
import psutil
from google.cloud import firestore

# --- Config ---
DEVICE_ID = os.getenv("DEVICE_ID", "MY-DEVICE")
SECURITY_KEY = os.getenv("SECURITY_KEY", "MKEY-MNM-001-TAC-2024")
HMAC_SECRET = os.getenv("COMMAND_HMAC_SECRET", "CHANGE_ME")

# --- Firestore ---
db = firestore.Client()

# --- Helpers ---

def now_iso():
    return datetime.now(timezone.utc).isoformat()

def canonical_payload(device_id: str, command: str, args: Dict[str, Any], nonce: str, ts: str) -> str:
    payload = {
        "deviceId": device_id,
        "command": command,
        "args": args if args else {},
        "nonce": nonce,
        "ts": ts
    }
    # Canonical JSON: sorted keys, no spaces
    return json.dumps(payload, sort_keys=True, separators=(",", ":"))

def verify_signature(device_id: str, command: str, args: Dict[str, Any], nonce: str, ts: str, signature: str) -> bool:
    msg = canonical_payload(device_id, command, args, nonce, ts).encode("utf-8")
    mac = hmac.new(HMAC_SECRET.encode("utf-8"), msg, hashlib.sha256).hexdigest()
    return hmac.compare_digest(mac, signature)

# --- Actions (extend as needed) ---

def action_system_report(args):
    cpu = psutil.cpu_percent(interval=1)
    ram = psutil.virtual_memory().percent
    try:
        battery = psutil.sensors_battery().percent
    except Exception:
        battery = None
    return {
        "CPU%": cpu,
        "RAM%": ram,
        "Battery%": battery,
        "OS": platform.platform(),
    }

def action_clean_device(args):
    # Very conservative cleanup: delete files in /tmp (Mac/Linux) or %TEMP% (Windows)
    import shutil, pathlib
    deleted, skipped = 0, 0
    try:
        if platform.system() == "Windows":
            temp = os.environ.get("TEMP")
        else:
            temp = "/tmp"
        if not temp or not os.path.exists(temp):
            return {"deleted": 0, "skipped": 0, "note": "temp path missing"}

        for p in pathlib.Path(temp).glob("*"):
            try:
                if p.is_file():
                    p.unlink()
                    deleted += 1
                elif p.is_dir():
                    shutil.rmtree(p, ignore_errors=True)
                    deleted += 1
                else:
                    skipped += 1
            except Exception:
                skipped += 1
        return {"deleted": deleted, "skipped": skipped}
    except Exception as e:
        return {"error": str(e)}

def action_type(args):
    text = args.get("text", "")
    interval = float(args.get("interval", 0.05))
    pyautogui.write(text, interval=interval)
    return {"typed": text}

def action_press(args):
    key = args.get("key", "enter")
    pyautogui.press(key)
    return {"pressed": key}

def action_mouse_move(args):
    x = int(args.get("x", 100))
    y = int(args.get("y", 100))
    dur = float(args.get("duration", 0.5))
    pyautogui.moveTo(x, y, duration=dur)
    return {"movedTo": [x, y]}

def action_click(args):
    button = args.get("button", "left")
    clicks = int(args.get("clicks", 1))
    pyautogui.click(button=button, clicks=clicks)
    return {"clicked": button, "clicks": clicks}

def action_screenshot(args):
    filename = args.get("filename", f"snap-{int(time.time())}.png")
    pyautogui.screenshot(filename)
    return {"screenshot": filename}

# Command registry
COMMANDS = {
    "system report": action_system_report,
    "clean device": action_clean_device,
    "type": action_type,
    "press": action_press,
    "mouse move": action_mouse_move,
    "click": action_click,
    "screenshot": action_screenshot,
}

def execute_command(doc_id: str, data: Dict[str, Any]):
    # Validate device & signature
    command = data.get("command", "")
    args = data.get("args", {}) or {}
    nonce = data.get("nonce", "")
    ts = data.get("ts", "")
    signature = data.get("signature", "")
    status = data.get("status", "")
    device_id = data.get("deviceId", "")

    if status != "pending":
        return  # Already processed or in progress; ignore

    if device_id != DEVICE_ID:
        # Not for this agent
        return

    if not verify_signature(device_id, command, args, nonce, ts, signature):
        raise ValueError("Signature verification failed")

    # Optional: up-level auth key inside args (defense-in-depth)
    if args.get("mkey") != SECURITY_KEY:
        raise ValueError("MKEY security key invalid")

    # Mark running
    cmd_ref = db.collection("devices").document(DEVICE_ID).collection("commands").document(doc_id)
    cmd_ref.set({"status": "running"}, merge=True)

    started = datetime.now(timezone.utc)
    try:
        fn = COMMANDS.get(command.lower().strip())
        if not fn:
            raise ValueError(f"Unknown command: {command}")

        output = fn(args)
        status = "done"
        error = None
    except Exception as e:
        status = "error"
        output = None
        error = f"{e}\n{traceback.format_exc()}"

    finished = datetime.now(timezone.utc)

    # Write result
    res_ref = db.collection("devices").document(DEVICE_ID).collection("results").document(doc_id)
    res_ref.set({
        "startedAt": started,
        "finishedAt": finished,
        "status": status,
        "output": output,
        "error": error,
        "agentInfo": {
            "deviceId": DEVICE_ID,
            "os": platform.platform(),
            "agentVersion": "1.0.0",
        }
    }, merge=True)

    # Close command
    cmd_ref.set({"status": status}, merge=True)

def on_snapshot(col_snapshot, changes, read_time):
    for change in changes:
        if change.type.name == "ADDED":
            doc = change.document
            try:
                execute_command(doc.id, doc.to_dict())
            except Exception as e:
                # Write error result even if exception occurs early
                res_ref = db.collection("devices").document(DEVICE_ID).collection("results").document(doc.id)
                res_ref.set({
                    "startedAt": datetime.now(timezone.utc),
                    "finishedAt": datetime.now(timezone.utc),
                    "status": "error",
                    "output": None,
                    "error": f"{e}",
                    "agentInfo": {
                        "deviceId": DEVICE_ID,
                        "os": platform.platform(),
                        "agentVersion": "1.0.0",
                    }
                }, merge=True)

def main():
    # Ensure device doc exists
    dev_ref = db.collection("devices").document(DEVICE_ID)
    dev_ref.set({
        "ownerUid": "__SET_OWNER_UID_IN_FIREBASE__",  # optional metadata
        "name": DEVICE_ID,
        "createdAt": firestore.SERVER_TIMESTAMP,
    }, merge=True)

    print(f"[{DEVICE_ID}] Agent online. Listening for commands…")
    commands_ref = dev_ref.collection("commands")
    # Stream new commands
    commands_ref.where("status", "==", "pending").on_snapshot(on_snapshot)

    # Keep alive
    while True:
        time.sleep(60)

if __name__ == "__main__":
    main()