# ClassPath

This project is a front-end campus navigation app built for a CS capstone submission. It uses the campus map image plus JavaScript routing data to let a user choose a starting point, select a destination, and see the walking path drawn directly on the map like a lightweight GPS.

## Features

- Search locations by room code, room name, or keyword
- Filter by category: academic, arts, athletics, admin, support, and portables
- Clickable hotspots placed on the campus map
- SVG route overlay that draws the walking path on the map
- Detail panel with route steps, estimated walking distance, and time
- Separate events page with event time, venue, route guidance, and add/remove event controls
- Lost and found locator with reported items, new report submission, claimed status updates, and route guidance to the last seen area
- Responsive layout that works on desktop and mobile

## Files

- `index.html` - main app structure
- `events.html` - event listings page
- `lost-found.html` - lost and found locator page
- `styles.css` - layout, theme, and responsive styling
- `app.js` - campus location data and interactivity
- `events.js` - event data and event route guidance
- `lost-found.js` - lost item report data and route guidance
- `assets/campus-map.jpg` - campus map image used by the app

## How To Run

1. Open `index.html` in a browser.
2. Use the search bar or category filters to find a location.
3. Click a result card or map hotspot to show details.
4. Change the starting point dropdown to generate a new map route.
5. Open `events.html` to view school events and jump into the map route for any event venue.
6. Use the events form to add new school events or remove existing ones.
7. Open `lost-found.html` to view reported items and route to where they were last reported lost.
8. Use the lost and found form to report a missing item or mark an existing report as claimed.

## Future Improvements

- Expand the waypoint graph into exact sidewalk-by-sidewalk routing
- Expand the room database with every classroom on campus
- Connect the map to a backend database for editable campus data
