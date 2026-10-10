# ZIO RADIOS — Implementation Plan

ZIO RADIOS is a deliberately minimal radio selector: one large 360px rounded wheel, centered on the page, divided into five colored station segments. Each segment is itself the single ON/OFF control for that station. Selecting one station highlights it as ON and clears the other four stations to OFF. The browser audio element remains built in and will play a station once its verified `streamUrl` is supplied.

The visual direction is a tactile orange broadcast dial: warm cream background, orange outer body, five saturated signal colors, thick rounded edges, and short station labels. There are no extra cards, headers, player docks, volume controls, or secondary actions in the interface.

The app is intentionally dependency-free. `index.html` contains the single radio-wheel shell, `src/main.js` owns station state and audio switching, `src/styles.css` owns the circular five-part composition, and `server.js` serves the preview.
