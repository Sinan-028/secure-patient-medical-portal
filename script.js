// Dummy unified JSON data
const medicalHistory = [
  { year: 2023, record: "Blood Test – City Hospital" },
  { year: 2024, record: "X-Ray – Apollo Clinic" },
  { year: 2025, record: "Surgery – Govt Medical College" }
];


const timelineDiv = document.getElementById("timeline");
medicalHistory.forEach(item => {
  const div = document.createElement("div");
  div.className = "timeline-item";
  div.innerHTML = `<strong>[${item.year}]</strong> ${item.record}`;
  timelineDiv.appendChild(div);
});


function grantAccess(hospital) {
  document.getElementById(`${hospital}-status`).innerText = "✅ Granted";
}

function revokeAccess(hospital) {
  document.getElementById(`${hospital}-status`).innerText = "❌ Revoked";
}


function enableEmergencyAccess() {
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
