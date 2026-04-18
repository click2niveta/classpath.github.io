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

const locations = {
  "theater": { name: "Theater", code: "Performing Arts", position: { x: 86.2, y: 10.8 } },
  "band-room": { name: "Band Room B153", code: "B153", position: { x: 82.8, y: 19.8 } },
  "multi-use-room": { name: "Multi Use Room", code: "Campus Event Space", position: { x: 84.5, y: 33.5 } },
  "large-gym": { name: "Large Gym", code: "Main Gymnasium", position: { x: 57, y: 50.8 } },
  "stadium": { name: "Stadium", code: "Outdoor Athletics", position: { x: 79.2, y: 61.5 } },
  "learning-commons": { name: "Learning Commons", code: "L102-L103", position: { x: 34.5, y: 15.5 } }
};

const destinationNodes = {
  "theater": "theater-lobby",
  "band-room": "arts-hub",
  "multi-use-room": "east-mid",
  "large-gym": "central-hub",
  "stadium": "stadium-hub",
  "learning-commons": "learning-hub"
};

const defaultEvents = [
  {
    id: "event-1",
    title: "Spring Drama Showcase",
    time: "Friday, 7:00 PM",
    venueId: "theater",
    audience: "Students, families, and guests",
    description: "An evening performance featuring theater scenes, student monologues, and stage tech highlights."
  },
  {
    id: "event-2",
    title: "Jazz Ensemble Night",
    time: "Wednesday, 6:30 PM",
    venueId: "band-room",
    audience: "Music students and parents",
    description: "A rehearsal-style showcase with small ensemble performances and student solos."
  },
  {
    id: "event-3",
    title: "College and Career Fair",
    time: "Thursday, 4:00 PM",
    venueId: "multi-use-room",
    audience: "Students and guardians",
    description: "Campus clubs, counselors, and guest programs meet with students about college and career options."
  },
  {
    id: "event-4",
    title: "Pep Rally",
    time: "Friday, 2:15 PM",
    venueId: "large-gym",
    audience: "Whole school",
    description: "School spirit event with performances, announcements, and team recognition."
  },
  {
    id: "event-5",
    title: "Homecoming Game",
    time: "Friday, 7:30 PM",
    venueId: "stadium",
    audience: "Community event",
    description: "Evening football game at the stadium with ticketing, seating, and campus traffic around athletics."
  },
  {
    id: "event-6",
    title: "Capstone Expo",
    time: "Tuesday, 3:45 PM",
    venueId: "learning-commons",
    audience: "Teachers and project reviewers",
    description: "Student teams present final projects and live presentations inside the Learning Commons."
  }
];

const eventStartSelect = document.querySelector("#eventStartSelect");
const eventsGrid = document.querySelector("#eventsGrid");
const eventForm = document.querySelector("#eventForm");
const eventMessage = document.querySelector("#eventMessage");
const storageKey = "classpath-events";

let events = loadEvents();

function loadEvents() {
  const savedEvents = window.localStorage.getItem(storageKey);
  if (!savedEvents) {
    return [...defaultEvents];
  }

  try {
    const parsedEvents = JSON.parse(savedEvents);
    return Array.isArray(parsedEvents) && parsedEvents.length ? parsedEvents : [...defaultEvents];
  } catch {
    return [...defaultEvents];
  }
}

function saveEvents() {
  window.localStorage.setItem(storageKey, JSON.stringify(events));
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

function buildEventRoute(venueId) {
  const startNodeId = eventStartSelect.value;
  const endNodeId = destinationNodes[venueId];
  const path = buildPathGraph(startNodeId, endNodeId);
  const labels = path.slice(1).map((nodeId) => campusNodes[nodeId].label);
  const venue = locations[venueId];
  const firstStep = labels[0]
    ? `From ${campusNodes[startNodeId].label}, head ${getDirectionLabel(campusNodes[startNodeId], campusNodes[path[1]])} toward ${labels[0]}.`
    : `Start at ${campusNodes[startNodeId].label}.`;
  const followUp = labels.length > 1
    ? `Continue through ${labels.slice(1, 3).join(" and ")}.`
    : "Follow the nearest campus walkway toward the venue.";

  return `${firstStep} ${followUp} Finish at ${venue.name}.`;
}

function buildMapLink(venueId) {
  const params = new URLSearchParams({
    start: eventStartSelect.value,
    destination: venueId
  });
  return `./index.html?${params.toString()}`;
}

function removeEvent(eventId) {
  events = events.filter((eventItem) => eventItem.id !== eventId);
  saveEvents();
  renderEvents();
}

function renderEvents() {
  eventsGrid.innerHTML = "";

  events.forEach((eventItem) => {
    const venue = locations[eventItem.venueId];
    const article = document.createElement("article");
    article.className = "event-card";
    article.innerHTML = `
      <p class="eyebrow">Upcoming Event</p>
      <h2>${eventItem.title}</h2>
      <div class="event-time">${eventItem.time}</div>
      <p class="event-meta">${venue.name} · ${venue.code}</p>
      <p>${eventItem.description}</p>
      <p class="event-meta">Audience: ${eventItem.audience}</p>
      <section class="route-preview">
        <h4>How To Get There</h4>
        <p>${buildEventRoute(eventItem.venueId)}</p>
      </section>
      <div class="event-actions">
        <a class="event-link primary" href="${buildMapLink(eventItem.venueId)}">Open Route On Map</a>
        <a class="event-link secondary" href="${buildMapLink(eventItem.venueId)}&search=${encodeURIComponent(venue.name)}">Open And Search Venue</a>
        <button class="event-link secondary remove-event-button" type="button" data-event-id="${eventItem.id}">Remove Event</button>
      </div>
    `;
    eventsGrid.appendChild(article);
  });

  eventsGrid.querySelectorAll(".remove-event-button").forEach((button) => {
    button.addEventListener("click", () => {
      removeEvent(button.dataset.eventId);
    });
  });
}

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(eventForm);
  const title = String(formData.get("title") || "").trim();
  const time = String(formData.get("time") || "").trim();
  const venueId = String(formData.get("venueId") || "").trim();
  const audience = String(formData.get("audience") || "").trim();
  const description = String(formData.get("description") || "").trim();

  if (!title || !time || !venueId || !audience || !description) {
    eventMessage.textContent = "Please fill out every event field.";
    return;
  }

  events.unshift({
    id: `event-${Date.now()}`,
    title,
    time,
    venueId,
    audience,
    description
  });

  saveEvents();
  eventForm.reset();
  eventMessage.textContent = `${title} was added to the events page.`;
  renderEvents();
});

eventStartSelect.addEventListener("change", renderEvents);
renderEvents();
