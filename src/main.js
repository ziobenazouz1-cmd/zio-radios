const stations = [
  { id: 'mollerussa', name: 'Radio Punts Mollerussa', label: 'Punts Mollerussa', color: '#f28a2e', streamUrl: '' },
  { id: 'lasexta', name: 'Radio La Sexta', label: 'La Sexta', color: '#f05c45', streamUrl: '' },
  { id: 'cnn', name: 'CNN Radio', label: 'CNN Radio', color: '#db3d62', streamUrl: '' },
  { id: 'fox', name: 'Fox News Radio', label: 'Fox News Radio', color: '#a852b7', streamUrl: '' },
  { id: 'npr', name: 'NPR Radio', label: 'NPR Radio', color: '#4e9eb5', streamUrl: '' }
];

const audio = document.querySelector('#audio');
const wheel = document.querySelector('#radioWheel');
let activeId = null;

function pointAt(angle, radius = 50) {
  const radians = angle * Math.PI / 180;
  return `${(50 + Math.cos(radians) * radius).toFixed(2)}% ${(50 + Math.sin(radians) * radius).toFixed(2)}%`;
}

function labelPosition(index) {
  const radians = (-90 + index * 72 + 36) * Math.PI / 180;
  return {
    left: `${(50 + Math.cos(radians) * 27).toFixed(2)}%`,
    top: `${(50 + Math.sin(radians) * 27).toFixed(2)}%`
  };
}

function sliceClip(index) {
  const start = -90 + index * 72 + 1.2;
  const end = start + 69.6;
  return `polygon(50% 50%, ${pointAt(start)}, ${pointAt(end)})`;
}

function render() {
  const slices = stations.map((station, index) => {
    const isOn = activeId === station.id;
    return `
      <button
        class="station-segment ${isOn ? 'is-on' : ''}"
        style="--segment-color: ${station.color}; clip-path: ${sliceClip(index)};"
        type="button"
        data-station="${station.id}"
        aria-pressed="${isOn}"
        aria-label="Turn ${station.name} ${isOn ? 'off' : 'on'}"
      ></button>
    `;
  }).join('');

  const labels = stations.map((station, index) => {
    const position = labelPosition(index);
    const isOn = activeId === station.id;
    return `
      <span class="wheel-label ${isOn ? 'is-on' : ''}" style="left: ${position.left}; top: ${position.top};">
        <span class="segment-number">0${index + 1}</span>
        <span class="segment-name">${station.label}</span>
        <span class="segment-state">${isOn ? 'ON' : 'OFF'}</span>
      </span>
    `;
  }).join('');

  wheel.innerHTML = slices + labels;
  wheel.querySelectorAll('[data-station]').forEach((button) => {
    button.addEventListener('click', () => toggle(button.dataset.station));
  });
}

function toggle(id) {
  const station = stations.find((item) => item.id === id);
  if (activeId === id) {
    activeId = null;
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
  } else {
    activeId = id;
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    if (station?.streamUrl) {
      audio.src = station.streamUrl;
      audio.play().catch(() => {});
    }
  }
  render();
}

render();
