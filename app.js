const locations = [
  {
    id: "learning-commons",
    name: "Learning Commons",
    code: "L102-L103",
    category: "support",
    zone: "North Academic Wing",
    position: { x: 34.5, y: 15.5 },
    description: "Central study and collaboration area near the L-building classrooms.",
    notes: "Good landmark when navigating toward the A-wing and upper academic rooms.",
    nearby: ["L119", "L121", "L125", "A201-A215"],
    aliases: ["library", "commons", "l102", "l103", "learning center"]
  },
  {
    id: "admin-offices",
    name: "Administrative Offices",
    code: "Main Office",
    category: "admin",
    zone: "North Central Campus",
    position: { x: 53, y: 18.5 },
    description: "Main administrative area for office support and campus services.",
    notes: "Use this as a front-campus reference point for nearby A-wing classrooms.",
    nearby: ["A151-A155", "A160-A163", "A201-A215"],
    aliases: ["office", "front office", "administration", "admin"]
  },
  {
    id: "a-upper",
    name: "A-Wing Upper Classrooms",
    code: "A201-A228",
    category: "academic",
    zone: "North Academic Wing",
    position: { x: 58.5, y: 8.8 },
    description: "Upper A-wing classrooms located across the top-center academic corridor.",
    notes: "Includes rooms like A201, A202, A203, A211, A214, A217, A223, A225, and A228.",
    nearby: ["Administrative Offices", "Learning Commons"],
    aliases: ["a201", "a202", "a203", "a211", "a214", "a217", "a223", "a225", "a228", "a wing"]
  },
  {
    id: "a-lower",
    name: "A-Wing Lower Classrooms",
    code: "A151-A163",
    category: "academic",
    zone: "North Academic Wing",
    position: { x: 63.5, y: 18.8 },
    description: "Lower A-wing classroom row located beneath the main administrative corridor.",
    notes: "Includes rooms A151, A152, A153, A154, A155, A160, A161, A162, and A163.",
    nearby: ["Administrative Offices", "A-Wing Upper Classrooms"],
    aliases: ["a151", "a152", "a153", "a154", "a155", "a160", "a161", "a162", "a163"]
  },
  {
    id: "theater",
    name: "Theater",
    code: "Performing Arts",
    category: "arts",
    zone: "Northeast Campus",
    position: { x: 86.2, y: 10.8 },
    description: "Large performing arts venue connected to the drama and music area.",
    notes: "Best reached from the theater lobby side if attending events.",
    nearby: ["Scene Shop", "Dressing Rooms", "Theater Manager B143"],
    aliases: ["auditorium", "stage", "performing arts", "drama"]
  },
  {
    id: "band-room",
    name: "Band Room B153",
    code: "B153",
    category: "arts",
    zone: "Northeast Campus",
    position: { x: 82.8, y: 19.8 },
    description: "Band rehearsal space in the performing arts section of campus.",
    notes: "Located below the theater area near the dance and orchestra rooms.",
    nearby: ["Dance Studio B160", "Orchestra B148", "Theater"],
    aliases: ["band", "music", "b153"]
  },
  {
    id: "orchestra",
    name: "Orchestra B148",
    code: "B148",
    category: "arts",
    zone: "Northeast Campus",
    position: { x: 92.5, y: 20.8 },
    description: "Orchestra classroom located along the right side of the performing arts area.",
    notes: "Close to the theater manager office and band room.",
    nearby: ["Band Room B153", "Theater Manager B143"],
    aliases: ["orchestra", "b148"]
  },
  {
    id: "dance",
    name: "Dance Studio B160",
    code: "B160",
    category: "arts",
    zone: "Northeast Campus",
    position: { x: 76.2, y: 20.5 },
    description: "Dance studio connected to the arts complex on the right side of campus.",
    notes: "Use the theater side of campus as your main landmark.",
    nearby: ["Band Room B153", "Theater"],
    aliases: ["dance", "b160", "studio"]
  },
  {
    id: "drama-office",
    name: "Theater Manager B143",
    code: "B143",
    category: "arts",
    zone: "Northeast Campus",
    position: { x: 92.8, y: 15.9 },
    description: "Office space adjacent to the theater and music rooms.",
    notes: "Useful landmark for the right-most side of the arts building.",
    nearby: ["Theater", "Orchestra B148"],
    aliases: ["theater manager", "b143"]
  },
  {
    id: "multi-use-room",
    name: "Multi Use Room",
    code: "Campus Event Space",
    category: "support",
    zone: "East Campus",
    position: { x: 84.5, y: 33.5 },
    description: "Flexible event and meeting space located east of the main academic core.",
    notes: "This is a large standalone building near the arts and athletics side of campus.",
    nearby: ["Theater", "Stadium"],
    aliases: ["multi use", "meeting room", "event room"]
  },
  {
    id: "c-wing",
    name: "C-Wing Classrooms",
    code: "C202-C234",
    category: "academic",
    zone: "West Academic Wing",
    position: { x: 15.5, y: 28.5 },
    description: "Main C-wing hallway cluster on the left side of campus.",
    notes: "Includes classrooms such as C202, C203, C207, C214, C221, C227, C231, and C234.",
    nearby: ["D-Wing Classrooms", "Lab Pre 6"],
    aliases: ["c202", "c203", "c207", "c214", "c221", "c227", "c231", "c234", "c wing"]
  },
  {
    id: "d-wing",
    name: "D-Wing Classrooms",
    code: "D101-D116",
    category: "academic",
    zone: "West Academic Wing",
    position: { x: 5.5, y: 26.8 },
    description: "Left-most classroom building with rooms in the D100 range.",
    notes: "Includes rooms D101 through D116, with several offices and IT nearby.",
    nearby: ["IT Office", "C-Wing Classrooms"],
    aliases: ["d101", "d102", "d103", "d104", "d105", "d106", "d107", "d108", "d109", "d110", "d112", "d113", "d114", "d115", "d116", "d wing"]
  },
  {
    id: "lab-prep",
    name: "Lab Prep 6",
    code: "Science Support",
    category: "support",
    zone: "West Academic Wing",
    position: { x: 8.6, y: 18.8 },
    description: "Science prep and support room near the D-wing/C-wing connection.",
    notes: "Useful landmark if you are heading toward science-related classrooms.",
    nearby: ["C-Wing Classrooms", "D-Wing Classrooms"],
    aliases: ["lab prep", "prep room", "science prep"]
  },
  {
    id: "e-wing",
    name: "E-Building Specialty Rooms",
    code: "E101-E115",
    category: "academic",
    zone: "Southwest Campus",
    position: { x: 17.8, y: 69.5 },
    description: "Specialized classrooms including culinary, engineering, computer science, biomed, and ceramics.",
    notes: "Includes E101 Culinary, E107 Engineering, E108 Comp Sci, E109 Biomed, and E115 Ceramics.",
    nearby: ["West Academic Wing", "Athletics Complex"],
    aliases: ["e101", "e107", "e108", "e109", "e115", "culinary", "engineering", "comp sci", "computer science", "biomed", "ceramics"]
  },
  {
    id: "boys-locker",
    name: "Boys Locker Room",
    code: "Athletics Support",
    category: "athletics",
    zone: "Central Athletics Complex",
    position: { x: 39.2, y: 47.2 },
    description: "Locker room area on the west side of the gym complex.",
    notes: "Close to the PE office and adjacent support rooms.",
    nearby: ["Girls Locker Room", "PE War Room", "Large Gym"],
    aliases: ["boys locker", "locker room"]
  },
  {
    id: "girls-locker",
    name: "Girls Locker Room",
    code: "Athletics Support",
    category: "athletics",
    zone: "Central Athletics Complex",
    position: { x: 39.2, y: 57.2 },
    description: "Girls locker room on the athletics side of campus.",
    notes: "Near the wrestling room and gym entries.",
    nearby: ["Boys Locker Room", "Large Gym", "Wrestling Room"],
    aliases: ["girls locker", "locker"]
  },
  {
    id: "large-gym",
    name: "Large Gym",
    code: "Main Gymnasium",
    category: "athletics",
    zone: "Central Athletics Complex",
    position: { x: 57, y: 50.8 },
    description: "Primary gymnasium in the center-lower portion of campus.",
    notes: "One of the easiest campus landmarks to spot from the map.",
    nearby: ["Small Gym", "Ticket Booth", "Locker Rooms"],
    aliases: ["gym", "main gym", "large gymnasium"]
  },
  {
    id: "small-gym",
    name: "Small Gym",
    code: "Auxiliary Gym",
    category: "athletics",
    zone: "Central Athletics Complex",
    position: { x: 49.5, y: 71 },
    description: "Smaller gym located just below the large gym building.",
    notes: "Use the large gym as your first landmark, then move south.",
    nearby: ["Large Gym", "Wrestling Room", "Weight Room"],
    aliases: ["small gym", "aux gym"]
  },
  {
    id: "wrestling-room",
    name: "Wrestling Room",
    code: "Athletics Training",
    category: "athletics",
    zone: "Central Athletics Complex",
    position: { x: 36.2, y: 68.8 },
    description: "Wrestling practice room located southwest of the small gym.",
    notes: "Sits beside the weight room in the athletics area.",
    nearby: ["Weight Room", "Girls Locker Room", "Small Gym"],
    aliases: ["wrestling"]
  },
  {
    id: "weight-room",
    name: "Weight Room",
    code: "Athletics Training",
    category: "athletics",
    zone: "Central Athletics Complex",
    position: { x: 41.8, y: 68.8 },
    description: "Weight training room next to the wrestling room.",
    notes: "Close to the DANCE/PE support spaces and the small gym.",
    nearby: ["Wrestling Room", "Small Gym"],
    aliases: ["weights", "training room"]
  },
  {
    id: "ticket-booth",
    name: "Ticket Booth",
    code: "Athletics Events",
    category: "athletics",
    zone: "Central Athletics Complex",
    position: { x: 63.5, y: 60.2 },
    description: "Ticket booth positioned near the gym and stadium side of campus.",
    notes: "Useful landmark if entering from the athletic facilities.",
    nearby: ["Large Gym", "Stadium"],
    aliases: ["tickets", "booth"]
  },
  {
    id: "stadium",
    name: "Stadium",
    code: "Outdoor Athletics",
    category: "athletics",
    zone: "Southeast Campus",
    position: { x: 79.2, y: 61.5 },
    description: "Large outdoor stadium located to the east of the gym complex.",
    notes: "A major campus landmark beside the pool and portables.",
    nearby: ["Pool", "Portables", "Large Gym"],
    aliases: ["field", "football field", "stadium"]
  },
  {
    id: "pool",
    name: "Pool",
    code: "Aquatics",
    category: "athletics",
    zone: "Southeast Campus",
    position: { x: 89.6, y: 76.5 },
    description: "Aquatics facility located southeast of the stadium.",
    notes: "Small standalone structure south-east of the stadium.",
    nearby: ["Stadium", "Portables"],
    aliases: ["aquatics", "swim", "pool"]
  },
  {
    id: "portables",
    name: "Portables",
    code: "P1-P8",
    category: "portable",
    zone: "Southeast Campus",
    position: { x: 94.3, y: 60.8 },
    description: "Portable classroom cluster containing rooms P1 through P8.",
    notes: "Located to the right of the stadium in the southeast section of campus.",
    nearby: ["Stadium", "Pool"],
    aliases: ["portable", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"]
  },
  {
    id: "it-office",
    name: "IT and Office Area",
    code: "Support Offices",
    category: "admin",
    zone: "West Academic Wing",
    position: { x: 6.2, y: 32.5 },
    description: "Small office cluster near the D-wing including IT and campus offices.",
    notes: "Found along the left side lower hallway near D108 and D107.",
    nearby: ["D-Wing Classrooms", "C-Wing Classrooms"],
    aliases: ["it", "office", "support office"]
  }
];

const categoryLabels = {
  all: "All",
  academic: "Academic",
  arts: "Arts",
  athletics: "Athletics",
  admin: "Admin",
  support: "Support",
  portable: "Portables"
};

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

const destinationNodes = {
  "learning-commons": "learning-hub",
  "admin-offices": "front-office",
  "a-upper": "a-upper-hub",
  "a-lower": "a-lower-hub",
  "theater": "theater-lobby",
  "band-room": "arts-hub",
  "orchestra": "arts-hub",
  "dance": "arts-hub",
  "drama-office": "arts-hub",
  "multi-use-room": "east-mid",
  "c-wing": "c-wing-hub",
  "d-wing": "d-wing-hub",
  "lab-prep": "lab-hub",
  "e-wing": "southwest-hub",
  "boys-locker": "locker-hub",
  "girls-locker": "locker-hub",
  "large-gym": "central-hub",
  "small-gym": "south-hub",
  "wrestling-room": "south-hub",
  "weight-room": "south-hub",
  "ticket-booth": "gym-entrance",
  "stadium": "stadium-hub",
  "pool": "pool-hub",
  "portables": "portable-walkway",
  "it-office": "d-wing-hub"
};

const state = {
  search: "",
  category: "all",
  selectedId: null
};

const searchInput = document.querySelector("#searchInput");
const clearSearch = document.querySelector("#clearSearch");
const categoryFilters = document.querySelector("#categoryFilters");
const startSelect = document.querySelector("#startSelect");
const resultsList = document.querySelector("#resultsList");
const resultCount = document.querySelector("#resultCount");
const hotspotLayer = document.querySelector("#hotspotLayer");
const routeOverlay = document.querySelector("#routeOverlay");
const detailCard = document.querySelector("#detailCard");
const pageParams = new URLSearchParams(window.location.search);

function createCategoryFilters() {
  Object.entries(categoryLabels).forEach(([value, label]) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `filter-chip ${value === state.category ? "active" : ""}`;
    chip.textContent = label;
    chip.addEventListener("click", () => {
      state.category = value;
      render();
    });
    categoryFilters.appendChild(chip);
  });
}

function applyInitialStateFromUrl() {
  const startParam = pageParams.get("start");
  const destinationParam = pageParams.get("destination");
  const searchParam = pageParams.get("search");

  if (startParam && campusNodes[startParam]) {
    startSelect.value = startParam;
  }

  if (searchParam) {
    state.search = searchParam;
    searchInput.value = searchParam;
  }

  if (destinationParam && getLocationById(destinationParam)) {
    state.selectedId = destinationParam;
  }
}

function getFilteredLocations() {
  const query = state.search.trim().toLowerCase();

  return locations.filter((location) => {
    const categoryMatch = state.category === "all" || location.category === state.category;
    const searchHaystack = [
      location.name,
      location.code,
      location.zone,
      location.description,
      ...location.aliases
    ]
      .join(" ")
      .toLowerCase();
    const searchMatch = !query || searchHaystack.includes(query);
    return categoryMatch && searchMatch;
  });
}

function getLocationById(id) {
  return locations.find((location) => location.id === id) ?? null;
}

function renderFilters() {
  [...categoryFilters.children].forEach((chip) => {
    const active = chip.textContent === categoryLabels[state.category];
    chip.classList.toggle("active", active);
  });
}

function renderResults(filtered) {
  resultCount.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;
  resultsList.innerHTML = "";

  if (!filtered.length) {
    resultsList.innerHTML = `<div class="empty-state">No locations matched your search. Try a room code like <strong>A201</strong> or a space like <strong>Gym</strong>.</div>`;
    return;
  }

  filtered.forEach((location) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `location-card ${location.id === state.selectedId ? "active" : ""}`;
    card.innerHTML = `
      <h3>${location.name}</h3>
      <div class="detail-meta">${location.code} · ${location.zone}</div>
      <div class="result-tags">
        <span class="tag">${categoryLabels[location.category]}</span>
        <span class="tag">${location.nearby[0]}</span>
      </div>
    `;
    card.addEventListener("click", () => {
      state.selectedId = location.id;
      render();
    });
    resultsList.appendChild(card);
  });
}

function renderHotspots(filtered) {
  hotspotLayer.innerHTML = "";
  filtered.forEach((location) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `map-hotspot ${location.category} ${location.id === state.selectedId ? "active" : ""}`;
    button.style.left = `${location.position.x}%`;
    button.style.top = `${location.position.y}%`;
    button.setAttribute("aria-label", location.name);
    button.title = `${location.name} (${location.code})`;
    button.addEventListener("click", () => {
      state.selectedId = location.id;
      render();
    });
    hotspotLayer.appendChild(button);
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

function dedupePoints(points) {
  return points.filter((point, index) => {
    const previous = points[index - 1];
    return !previous || previous.x !== point.x || previous.y !== point.y;
  });
}

function getRouteData(location) {
  const startNodeId = startSelect.value;
  const destinationNodeId = destinationNodes[location.id] ?? "central-hub";
  const nodePath = buildPathGraph(startNodeId, destinationNodeId);
  const routePoints = dedupePoints([
    campusNodes[startNodeId],
    ...nodePath.slice(1).map((nodeId) => campusNodes[nodeId]),
    location.position
  ]);

  return {
    startNodeId,
    destinationNodeId,
    nodePath,
    points: routePoints
  };
}

function getDirectionLabel(from, to) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const horizontal = dx > 0.8 ? "east" : dx < -0.8 ? "west" : "";
  const vertical = dy > 0.8 ? "south" : dy < -0.8 ? "north" : "";
  return [vertical, horizontal].filter(Boolean).join("-") || "forward";
}

function buildDirections(location, routeData) {
  const startName = campusNodes[routeData.startNodeId].label;
  const waypointLabels = routeData.nodePath.slice(1).map((nodeId) => campusNodes[nodeId].label);
  const waypointSteps = waypointLabels.slice(0, 4).map((label, index) => {
    const from = routeData.points[index];
    const to = routeData.points[index + 1];
    return `Head ${getDirectionLabel(from, to)} toward ${label}.`;
  });

  return [
    `Start at ${startName}.`,
    ...waypointSteps,
    `Follow the highlighted route to ${location.name}.`
  ];
}

function estimateWalk(routeData) {
  let total = 0;
  for (let index = 1; index < routeData.points.length; index += 1) {
    total += getDistance(routeData.points[index - 1], routeData.points[index]);
  }

  const scaledMeters = Math.round(total * 7.5);
  const minutes = Math.max(1, Math.round(scaledMeters / 80));
  return { scaledMeters, minutes };
}

function renderRoute(routeData) {
  const pathPoints = routeData.points.map((point) => `${point.x},${point.y}`).join(" ");
  const startPoint = routeData.points[0];
  const destinationPoint = routeData.points[routeData.points.length - 1];

  routeOverlay.innerHTML = `
    <polyline class="route-halo" points="${pathPoints}"></polyline>
    <polyline class="route-line" points="${pathPoints}"></polyline>
    <circle class="route-marker start" cx="${startPoint.x}" cy="${startPoint.y}" r="1.2"></circle>
    <circle class="route-marker destination" cx="${destinationPoint.x}" cy="${destinationPoint.y}" r="1.25"></circle>
  `;
}

function renderDetails() {
  const location = getLocationById(state.selectedId);

  if (!location) {
    detailCard.innerHTML = `<p class="detail-empty">Select a room or area to view details and directions.</p>`;
    routeOverlay.innerHTML = "";
    return;
  }

  const routeData = getRouteData(location);
  const directions = buildDirections(location, routeData);
  const routeStats = estimateWalk(routeData);
  renderRoute(routeData);

  detailCard.innerHTML = `
    <h3>${location.name}</h3>
    <div class="detail-code">${location.code}</div>
    <p class="detail-meta">${location.zone} · ${categoryLabels[location.category]}</p>
    <p>${location.description}</p>
    <p class="location-notes"><strong>Tip:</strong> ${location.notes}</p>
    <div class="detail-tags">
      ${location.aliases.slice(0, 4).map((alias) => `<span class="tag">${alias}</span>`).join("")}
    </div>
    <section class="direction-box">
      <h3>GPS Route</h3>
      <p class="direction-text">ClassPath is showing the walking route from ${campusNodes[routeData.startNodeId].label} to ${location.name}.</p>
      <div class="route-stats">
        <span class="stat-pill">${routeStats.scaledMeters} m estimated walk</span>
        <span class="stat-pill">${routeStats.minutes} min</span>
        <span class="stat-pill">${routeData.points.length - 1} route segments</span>
      </div>
      <ol class="step-list">
        ${directions.map((step) => `<li>${step}</li>`).join("")}
      </ol>
    </section>
    <section class="nearby-box">
      <h3>Nearby Landmarks</h3>
      <ul>
        ${location.nearby.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `;
}

function ensureSelectedVisible(filtered) {
  const stillVisible = filtered.some((location) => location.id === state.selectedId);
  if (!stillVisible) {
    state.selectedId = filtered[0]?.id ?? null;
  }
}

function render() {
  const filtered = getFilteredLocations();
  ensureSelectedVisible(filtered);
  renderFilters();
  renderResults(filtered);
  renderHotspots(filtered);
  renderDetails();
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

clearSearch.addEventListener("click", () => {
  state.search = "";
  searchInput.value = "";
  render();
});

startSelect.addEventListener("change", renderDetails);

createCategoryFilters();
state.selectedId = locations[0].id;
applyInitialStateFromUrl();
render();
