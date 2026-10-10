# ZIO RADIOS — Master Prompt

Use this prompt to recreate the ZIO RADIOS experience in another website builder, app generator, coding agent, or frontend codebase.

---

## Master Prompt

Build a polished, responsive web radio interface called **ZIO RADIOS**.

The experience must be extremely minimal: the page should contain one dominant interactive Earth globe, centered in a galaxy background. Do not add dashboards, cards, navigation bars, sidebars, player docks, extra buttons, forms, or decorative sections. The globe is the interface.

### Core visual concept

Create a realistic Earth sphere floating in deep outer space. Use a dark galaxy background with:

- Deep navy and black space
- Subtle violet and blue nebula clouds
- Many small, distant stars
- No large foreground planets
- No spacecraft, logos, text, or unrelated objects
- A cinematic but calm atmosphere

The Earth should be the visual priority. It must fill most of the circular control and appear to float naturally in the universe. Avoid a heavy colored frame. Use only a thin, cool white/blue atmospheric rim or soft blue glow around the Earth so the globe remains dominant.

### Earth radio control

Divide the Earth sphere into **five equal clickable slices** radiating from the center dot to the outer edge of the globe.

Important geometry requirements:

- The slices must start at the exact center of the Earth.
- Each slice must reach the Earth’s circular edge.
- The five slices must meet cleanly at the center.
- Do not use thick triangle outlines, colored wedges, orange fills, or visible pizza-slice borders.
- Keep the Earth visually seamless: the five slices should look like portions of one globe rather than five separate colored triangles.
- Preserve a small circular dot/hub in the exact center.
- The center dot should have a subtle light rim and dark translucent interior.
- The Earth image must be aligned identically across all five slices so coastlines and cloud patterns remain continuous.
- Clip the Earth image to five wedge-shaped button hit areas while keeping the underlying image visually consistent.

### Radio stations

Use these five station labels exactly:

1. **Punts Mollerussa**
2. **La Sexta**
3. **CNN Radio**
4. **Fox News Radio**
5. **NPR Radio**

You may show small numeric identifiers `01` through `05`, but do not add extra station cards or controls.

Place each station label inside its corresponding Earth slice. Labels must remain readable over oceans, clouds, and land. Use a clean modern sans-serif font with a compact monospace style for the numeric identifier and ON/OFF state.

Use white or pale blue text with a subtle dark text shadow. Keep labels short, centered, and responsive on mobile screens.

### Station behavior

Each Earth slice is one station button.

When a user selects a station:

- That station becomes **ON**.
- All other stations immediately become **OFF**.
- The selected station label changes from `OFF` to `ON`.
- The selected slice receives a subtle brightness, contrast, and glow lift.
- The other slices remain visually connected to the same Earth image.
- If the selected station has a valid stream URL, start playback through a native browser `<audio>` element.
- If the stream URL is missing or unavailable, preserve the ON visual state and show a discreet non-blocking fallback state; never break the interface.

When the active station is clicked again:

- Turn it OFF.
- Pause the audio.
- Clear the audio source safely.
- Stop the active animation.

Only one station can be ON at a time.

### Interaction effects

Every slice must feel interactive without breaking the Earth illusion.

Idle state:

- Earth remains visually seamless.
- No heavy triangle outlines.
- No orange UI treatment.
- The globe has a subtle blue atmospheric glow.

Hover/focus state:

- Slight brightness or contrast increase.
- Very subtle lift or scale effect, approximately 1–2%.
- Clear keyboard focus treatment.
- Do not distort the Earth noticeably.

Pressed state:

- Slight scale-down or compression effect.
- Brief brightness/glow response.
- The center dot remains visible.

ON state:

- The selected slice gently pulses with a slow brightness/saturation rhythm.
- The center dot emits a soft expanding pulse ring.
- Three small musical notes such as `♪`, `♫`, and `♬` pop outward from the center and fade away.
- Musical notes should animate with slightly different directions and timings.
- The music-note effect should loop gently while the station is ON, not flash aggressively.
- The effect should feel like music is radiating from Earth.
- Respect `prefers-reduced-motion`: reduce or disable animations for users who request reduced motion.

### Audio implementation

Use one native audio element:

```html
<audio id="audio" preload="none"></audio>
```

Store stations in a small data structure with:

- `id`
- `name`
- `label`
- `streamUrl`

Keep `streamUrl` values configurable and do not invent unreliable stream URLs. If no verified URL is available, leave the value empty and keep the visual ON/OFF interaction functional.

Handle audio errors gracefully:

- Do not show a browser error page.
- Keep the selected station visually ON if the stream is unavailable.
- Provide an unobtrusive status message only if needed.

### Accessibility

Include:

- A semantic group around the five station buttons.
- Real `<button>` elements for each station slice.
- `aria-label` describing the station and action.
- `aria-pressed="true|false"` for each station.
- Keyboard support with Enter and Space.
- Visible keyboard focus styling.
- A visually hidden page title such as `ZIO RADIOS`.
- Reduced-motion support using `@media (prefers-reduced-motion: reduce)`.
- Sufficient text contrast over the Earth image.

### Responsive behavior

The Earth globe should:

- Be approximately 360px × 360px on desktop.
- Scale down to fit narrow mobile screens with safe page padding.
- Remain perfectly circular at every viewport size.
- Keep the five slice hit areas and labels aligned as the globe scales.
- Avoid page scrolling for the primary interface.
- Preserve the galaxy background on desktop and mobile.

### Styling direction

Use a restrained palette:

- Galaxy: `#030511`, deep navy, black, subtle violet and blue
- Earth: realistic blue, green, white, and cloud tones from the Earth image
- Text: white and pale blue
- Glow: cool blue-white
- Avoid orange entirely in the final visual design.

Use a modern geometric sans-serif for labels and a compact monospace font for station numbers and ON/OFF state. The design should feel like a futuristic broadcast dial floating in space, not a conventional radio dashboard.

### Asset requirements

Use:

1. A realistic square Earth-from-space image for the globe.
2. A wide galaxy/star-field image for the page background.

The Earth asset must be used consistently across all five slices so the globe remains continuous. The background must contain distant stars and remain visually quiet behind the Earth.

Do not place text inside generated images. Add all station labels as editable HTML/CSS text overlays.

### Technical implementation

Prefer a dependency-light implementation using:

- HTML
- CSS
- Vanilla JavaScript or the host framework’s standard components
- CSS `clip-path` or an equivalent precise wedge hit-area technique
- A single native `<audio>` element
- CSS keyframe animations for pulse and musical-note effects

Keep the Earth image and the slice hit areas aligned. The underlying globe should not shift when a station is hovered or activated. Any slice scale effect must be subtle and centered.

### GitHub Pages compatibility

The site must work from a repository subpath such as:

```text
https://USERNAME.github.io/REPOSITORY/
```

Therefore:

- Use relative paths for local CSS, JavaScript, and image assets.
- Do not hard-code root paths such as `/src/main.js` or `/assets/earth.webp`.
- Keep Earth and galaxy images inside the repository.
- Include a static GitHub Pages deployment workflow if the platform supports GitHub Actions.
- The output must contain an `index.html` at the published root.

### Final acceptance criteria

The finished result is correct only when all of the following are true:

- The page shows a galaxy with distant stars.
- A realistic Earth sphere is the dominant central object.
- The Earth is divided into five equal selectable slices.
- The slices run from the center dot to the Earth’s circular edge.
- There are no thick triangle borders or orange fills.
- The Earth still looks like one continuous sphere.
- The center dot is visible at all times.
- The five station names are readable and correctly placed.
- Selecting one station turns it ON and all others OFF.
- Selecting the active station again turns it OFF.
- Hover and press states feel tactile.
- The ON state creates a different music effect with pulse and floating musical notes.
- The interface works on desktop and mobile.
- The native audio element is wired for configurable station streams.
- Keyboard and reduced-motion accessibility are supported.
- The site works from a GitHub Pages subpath.

Do not add unrelated features. Keep the experience focused on one beautiful interactive Earth radio globe.
