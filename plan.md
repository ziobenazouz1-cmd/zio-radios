# ZIO RADIOS — Implementation Plan

ZIO RADIOS is a deliberately minimal radio selector: one large 360px rounded circle, centered on the page, divided into five triangular station wedges. Each wedge is the single ON/OFF control for that station. Selecting one station highlights it as ON and clears the other four stations to OFF. The browser audio element remains built in and will play a station once its verified `streamUrl` is supplied.

The visual direction is a floating Earth radio dial in deep space: a dark galaxy page background with subtle distant stars, a cool luminous ring around the circle, and the Earth image visible only inside the five triangular station wedges. The orange treatment has been removed. Labels remain on a readable overlay above the clipped Earth slices. There are no extra cards, headers, player docks, volume controls, or secondary actions in the interface.

The app is dependency-free. `index.html` contains the single radio-wheel shell, `src/main.js` owns station state, wedge geometry, label positions, and audio switching, `src/styles.css` owns the galaxy background, Earth slices, and floating glow, and `server.js` serves the preview.
