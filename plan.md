# ZIO RADIOS — Implementation Plan

## Product scope

A responsive radio web app with a built-in browser audio player. Each requested station is listed by name and has one prominent ON/OFF control in front of it. Only one station may be active at a time; activating a new station stops the previous station.

## Design

- **Design movement:** Broadcast control-room minimalism with a warm editorial layer.
- **Core principles:** signal-first hierarchy, one-action controls, calm density, and clear active state.
- **Color philosophy:** deep ink and midnight blue create the quiet of a late-night studio; violet is the ownable signal color; warm cream type keeps the interface human.
- **Layout paradigm:** a split console: a compact masthead and live-status rail above a station list, with a sticky player deck anchoring the bottom edge.
- **Signature elements:** signal-wave mark, pulsing live dot, and large monospaced station index numbers.
- **Interaction philosophy:** each station card has one obvious toggle; the interface explains the current state instead of hiding it in menus.
- **Animation:** slow waveform shimmer, restrained card lift on hover, and an active pulse only on the selected station.
- **Typography system:** Space Grotesk for editorial headings and Inter for UI copy, with IBM Plex Mono-style fallbacks for signal labels and station indexes.
- **Brand essence:** a focused listening console for switching between global news, local radio, and public media in one glance. Personality: direct, curious, composed.
- **Brand voice:** “Pick a signal. Stay in the story.” and “One tap to go live.”
- **Wordmark & logo:** ZIO appears as a compact broadcast stamp with a circular signal mark and a trailing live-status bar.
- **Signature brand color:** electric violet `#8b5cf6`.

## Project structure

- `index.html` — app shell and accessible audio element.
- `src/main.js` — station data, player state, and ON/OFF interactions.
- `src/styles.css` — responsive visual system and console layout.
- `server.js` — dependency-free static server for the managed preview.
- `public/manus-routes.json` — route declaration for the single-page app.
