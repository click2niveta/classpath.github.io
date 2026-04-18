const campusNodes = {
  "front-office": { x: 53, y: 22, label: "Front Office Entrance" },
  "north-hub": { x: 53, y: 14.5, label: "North Corridor" },
  "learning-hub": { x: 35.5, y: 15.6, label: "Learning Commons Walkway" },
  "a-upper-hub": { x: 58.5, y: 11.8, label: "Upper A-Wing Walkway" },
  "a-lower-hub": { x: 63.5, y: 18.8, label: "Lower A-Wing Walkway" },
  "west-connector": { x: 28.5, y: 28, label: "West Connector" },
  "c-wing-hub": { x: 15.8, y: 28.6, label: "C-Wing Entrance" },
  "d-wing-hub": { x: 6.4, y: 27.2, label: "D-Wing Entrance" },
  "lab-hub": { x: 9.2, y: 18.9, label: "Science Hallway" },
  "west-south-connector": { x: 29, y: 54.5, label: "Southwest Walkway" },
  "southwest-hub": { x: 24, y: 69, label: "E-Building Path" },
  "student-parking": { x: 11, y: 74, label: "Student Parking Lot" },
  "central-hub": { x: 57, y: 50.8, label: "Central Campus Path" },
  "locker-hub": { x: 39.2, y: 53.2, label: "Locker Room Walkway" },
  "south-hub": { x: 49.5, y: 69.2, label: "South Athletics Path" },
  "gym-entrance": { x: 66, y: 58, label: "Gym Entrance" },
  "east-mid": { x: 79, y: 33.5, label: "East Campus Path" },
  "arts-hub": { x: 84, y: 18.5, label: "Arts Corridor" },
  "theater-lobby": { x: 95, y: 12, label: "Theater Lobby Entrance" },
  "stadium-hub": { x: 79.2, y: 61.5, label: "Stadium Path" },
  "portable-walkway": { x: 97, y: 66, label: "Portable Walkway" },
  "pool-hub": { x: 89.6, y: 76.5, label: "Pool Path" }
};

const campusGraph = {
  "front-office": ["north-hub", "west-connector", "central-hub", "east-mid", "a-lower-hub"],
  "north-hub": ["front-office", "learning-hub", "a-upper-hub", "a-lower-hub"],
  "learning-hub": ["north-hub"],
  "a-upper-hub": ["north-hub", "arts-hub"],
  "a-lower-hub": ["front-office", "north-hub"],
  "west-connector": ["front-office", "c-wing-hub", "west-south-connector", "lab-hub"],
  "c-wing-hub": ["west-connector", "d-wing-hub"],
  "d-wing-hub": ["c-wing-hub", "lab-hub"],
  "lab-hub": ["d-wing-hub", "west-connector"],
  "west-south-connector": ["west-connector", "southwest-hub", "central-hub"],
  "southwest-hub": ["west-south-connector", "student-parking", "south-hub"],
  "student-parking": ["southwest-hub"],
  "central-hub": ["front-office", "west-south-connector", "locker-hub", "south-hub", "gym-entrance", "east-mid"],
  "locker-hub": ["central-hub", "south-hub"],
  "south-hub": ["locker-hub", "central-hub", "southwest-hub"],
  "gym-entrance": ["central-hub", "stadium-hub"],
  "east-mid": ["front-office", "central-hub", "arts-hub", "stadium-hub"],
  "arts-hub": ["east-mid", "theater-lobby", "a-upper-hub"],
  "theater-lobby": ["arts-hub"],
  "stadium-hub": ["gym-entrance", "east-mid", "portable-walkway", "pool-hub"],
  "portable-walkway": ["stadium-hub"],
  "pool-hub": ["stadium-hub"]
};

const reportLocations = {
  "learning-commons": { name: "Learning Commons", code: "L102-L103" },
  "theater": { name: "Theater", code: "Performing Arts" },
  "large-gym": { name: "Large Gym", code: "Main Gymnasium" },
  "stadium": { name: "Stadium", code: "Outdoor Athletics" },
  "c-wing": { name: "C-Wing Classrooms", code: "C202-C234" },
  "portables": { name: "Portables", code: "P1-P8" }
};

const destinationNodes = {
  "learning-commons": "learning-hub",
  "theater": "theater-lobby",
  "large-gym": "central-hub",
  "stadium": "stadium-hub",
  "c-wing": "c-wing-hub",
  "portables": "portable-walkway"
};

const defaultReports = [
  {
    id: "report-1",
    item: "Black Hydro Flask",
    reportedTime: "Today, 10:25 AM",
    status: "Reported missing",
    locationId: "learning-commons",
    details: "Reported left near the study tables after second period."
  },
  {
    id: "report-2",
    item: "Blue Backpack",
    reportedTime: "Today, 12:40 PM",
    status: "Reported missing",
    locationId: "c-wing",
    details: "Last seen outside a classroom in the west academic wing."
  },
  {
    id: "report-3",
    item: "AirPods Case",
    reportedTime: "Today, 1:15 PM",
    status: "Reported missing",
    locationId: "large-gym",
    details: "Student reported it missing after PE near the gym entrance side."
  },
  {
    id: "report-4",
    item: "Student ID Card",
    reportedTime: "Today, 2:05 PM",
    status: "Reported missing",
    locationId: "theater",
    details: "Reported lost after rehearsal in the performing arts area."
  },
  {
    id: "report-5",
    item: "Gray Hoodie",
    reportedTime: "Yesterday, 7:50 PM",
    status: "Reported missing",
    locationId: "stadium",
    details: "Last seen in the bleacher area during an evening athletics event."
  },
  {
    id: "report-6",
    item: "TI-84 Calculator",
    reportedTime: "Today, 9:10 AM",
    status: "Reported missing",
    locationId: "portables",
    details: "Reported missing after a class in the portable buildings."
  }
];

const lostStartSelect = document.querySelector("#lostStartSelect");
const lostFoundGrid = document.querySelector("#lostFoundGrid");
const reportForm = document.querySelector("#reportForm");
const reportMessage = document.querySelector("#reportMessage");
const storageKey = "classpath-lost-found-reports";

let reports = loadReports();

function loadReports() {
  const savedReports = window.localStorage.getItem(storageKey);
  if (!savedReports) {
    return [...defaultReports];
  }

  try {
    const parsedReports = JSON.parse(savedReports);
    return Array.isArray(parsedReports) && parsedReports.length ? parsedReports : [...defaultReports];
  } catch {
    return [...defaultReports];
  }
}

function saveReports() {
  window.localStorage.setItem(storageKey, JSON.stringify(reports));
}

function formatReportedTime() {
  return new Date().toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function getDistance(pointA, pointB) {
  return Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y);
}

function buildPathGraph(startNodeId, endNodeId) {
  const distances = Object.fromEntries(Object.keys(campusNodes).map((id) => [id, Infinity]));
  const previous = {};
  const unvisited = new Set(Object.keys(campusNodes));
  distances[startNodeId] = 0;

  while (unvisited.size) {
    let current = null;
    let bestDistance = Infinity;
    unvisited.forEach((nodeId) => {
      if (distances[nodeId] < bestDistance) {
        bestDistance = distances[nodeId];
        current = nodeId;
      }
    });

    if (!current || current === endNodeId) {
      break;
    }

    unvisited.delete(current);
    campusGraph[current].forEach((neighborId) => {
      if (!unvisited.has(neighborId)) {
        return;
      }

      const altDistance = distances[current] + getDistance(campusNodes[current], campusNodes[neighborId]);
      if (altDistance < distances[neighborId]) {
        distances[neighborId] = altDistance;
        previous[neighborId] = current;
      }
    });
  }

  const path = [endNodeId];
  let cursor = endNodeId;
  while (previous[cursor]) {
    cursor = previous[cursor];
    path.unshift(cursor);
  }

  return path[0] === startNodeId ? path : [startNodeId, endNodeId];
}

function getDirectionLabel(from, to) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const horizontal = dx > 0.8 ? "east" : dx < -0.8 ? "west" : "";
  const vertical = dy > 0.8 ? "south" : dy < -0.8 ? "north" : "";
  return [vertical, horizontal].filter(Boolean).join("-") || "forward";
}

function buildLostRoute(locationId) {
  const startNodeId = lostStartSelect.value;
  const endNodeId = destinationNodes[locationId];
  const path = buildPathGraph(startNodeId, endNodeId);
  const labels = path.slice(1).map((nodeId) => campusNodes[nodeId].label);
  const location = reportLocations[locationId];
  const firstStep = labels[0]
    ? `From ${campusNodes[startNodeId].label}, head ${getDirectionLabel(campusNodes[startNodeId], campusNodes[path[1]])} toward ${labels[0]}.`
    : `Start at ${campusNodes[startNodeId].label}.`;
  const followUp = labels.length > 1
    ? `Continue through ${labels.slice(1, 3).join(" and ")}.`
    : "Follow the nearest campus walkway toward the report area.";

  return `${firstStep} ${followUp} Check the ${location.name} area first.`;
}

function buildMapLink(locationId) {
  const params = new URLSearchParams({
    start: lostStartSelect.value,
    destination: locationId
  });
  return `./index.html?${params.toString()}`;
}

function markReportClaimed(reportId) {
  reports = reports.map((report) => (
    report.id === reportId
      ? { ...report, status: "Claimed" }
      : report
  ));
  saveReports();
  renderLostReports();
}

function renderLostReports() {
  lostFoundGrid.innerHTML = "";

  reports.forEach((report) => {
    const location = reportLocations[report.locationId];
    const claimed = report.status === "Claimed";
    const article = document.createElement("article");
    article.className = "event-card";
    article.innerHTML = `
      <p class="eyebrow">Lost Item Report</p>
      <h2>${report.item}</h2>
      <div class="event-time">${report.reportedTime}</div>
      <p class="event-meta">${location.name} · ${location.code}</p>
      <p>${report.details}</p>
      <p class="event-meta">Status:</p>
      <div class="status-pill ${claimed ? "claimed" : "missing"}">${report.status}</div>
      <section class="route-preview">
        <h4>How To Get There</h4>
        <p>${buildLostRoute(report.locationId)}</p>
      </section>
      <div class="event-actions">
        <a class="event-link primary" href="${buildMapLink(report.locationId)}">Open Route On Map</a>
        <a class="event-link secondary" href="${buildMapLink(report.locationId)}&search=${encodeURIComponent(location.name)}">Open And Search Area</a>
        <button class="event-link secondary claim-button" type="button" data-report-id="${report.id}" ${claimed ? "disabled" : ""}>
          ${claimed ? "Already Claimed" : "Mark as Claimed"}
        </button>
      </div>
    `;
    lostFoundGrid.appendChild(article);
  });

  lostFoundGrid.querySelectorAll(".claim-button").forEach((button) => {
    button.addEventListener("click", () => {
      markReportClaimed(button.dataset.reportId);
    });
  });
}

reportForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(reportForm);
  const item = String(formData.get("itemName") || "").trim();
  const locationId = String(formData.get("locationId") || "").trim();
  const details = String(formData.get("details") || "").trim();

  if (!item || !locationId || !details) {
    reportMessage.textContent = "Please fill out all fields before submitting.";
    return;
  }

  reports.unshift({
    id: `report-${Date.now()}`,
    item,
    reportedTime: formatReportedTime(),
    status: "Reported missing",
    locationId,
    details
  });

  saveReports();
  reportForm.reset();
  reportMessage.textContent = `${item} was reported as missing.`;
  renderLostReports();
});

lostStartSelect.addEventListener("change", renderLostReports);
renderLostReports();
