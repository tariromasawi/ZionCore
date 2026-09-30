// seed-visuals.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("status").textContent = "Deploying seeds...";

async function deploySeeds(total) {
  for (let i = 0; i < total; i++) {
    const seedData = {
      id: `HRH-${i}-${Date.now()}`,
      command: "MWARINDIMWARI_LOCKED",
      timestamp: new Date().toISOString(),
      dimension: "ALL-TIMELINES",
      irreversible: true
    };
    await addDoc(collection(db, "seedNodes"), seedData);
    document.getElementById("seeds").innerHTML += `<li>🌱 Seed ${i+1} deployed</li>`;
    if (i % 10 === 0) await new Promise(r => setTimeout(r, 200)); // Avoid overload
  }
  document.getElementById("status").textContent = "✅ ALL SEEDS DEPLOYED";
}

deploySeeds(1000); // For testing – use batch cloud deploy for trillions