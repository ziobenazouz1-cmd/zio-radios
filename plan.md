# ZIO RADIOS — Implementation Plan

ZIO RADIOS is a deliberately minimal radio selector: one large 360px rounded orange circle, centered on the page, divided into five triangular pizza-slice wedges. Each wedge is the single ON/OFF control for that station. Selecting one station highlights it as ON and clears the other four stations to OFF. The browser audio element remains built in and will play a station once its verified `streamUrl` is supplied.

The visual direction is a tactile orange broadcast dial over planet Earth: warm cream page background, a thick orange outer circle, one shared Earth-from-space texture behind the station wedges, five saturated color washes, separated triangular slices, and readable station labels. There are no extra cards, headers, player docks, volume controls, or secondary actions in the interface.

The app is dependency-free. `index.html` contains the single radio-wheel shell, `src/main.js` owns station state, wedge geometry, label positions, and audio switching, `src/styles.css` owns the circular five-slice composition and Earth texture, and `server.js` serves the preview.
