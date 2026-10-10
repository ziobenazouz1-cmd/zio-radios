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

function render() {
  wheel.innerHTML = stations.map((station, index) => `
    <button
      class="station-segment ${activeId === station.id ? 'is-on' : ''}"
      style="--segment-color: ${station.color}; --segment-index: ${index};"
      type="button"
      data-station="${station.id}"
      aria-pressed="${activeId === station.id}"
      aria-label="Turn ${station.name} ${activeId === station.id ? 'off' : 'on'}"
    >
      <span class="segment-number">0${index + 1}</span>
      <span class="segment-name">${station.label}</span>
      <span class="segment-state">${activeId === station.id ? 'ON' : 'OFF'}</span>
    </button>
  `).join('');

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
