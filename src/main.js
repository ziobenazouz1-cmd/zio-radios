const stations = [
  {
    id: 'mollerussa',
    name: 'Radio Punts Mollerussa',
    shortName: 'Punts Mollerussa',
    region: 'Mollerussa · Catalunya',
    accent: '#f3a04d',
    streamUrl: '',
    note: 'Local signal'
  },
  {
    id: 'lasexta',
    name: 'Radio La Sexta',
    shortName: 'La Sexta',
    region: 'Spain · News',
    accent: '#f26b5e',
    streamUrl: '',
    note: 'News signal'
  },
  {
    id: 'cnn',
    name: 'CNN Radio',
    shortName: 'CNN Radio',
    region: 'United States · World news',
    accent: '#ec5d69',
    streamUrl: '',
    note: 'World signal'
  },
  {
    id: 'fox',
    name: 'Fox News Radio',
    shortName: 'Fox News',
    region: 'United States · News',
    accent: '#7c8cf8',
    streamUrl: '',
    note: 'News signal'
  },
  {
    id: 'npr',
    name: 'NPR Radio',
    shortName: 'NPR',
    region: 'United States · Public media',
    accent: '#55c6b2',
    streamUrl: '',
    note: 'Public signal'
  }
];

const state = { selectedId: null, isPlaying: false };
const audio = document.querySelector('#audio');
const stationList = document.querySelector('#stationList');
const heroStation = document.querySelector('#heroStation');
const heroState = document.querySelector('#heroState');
const playerStation = document.querySelector('#playerStation');
const playerStatus = document.querySelector('#playerStatus');
const playerArt = document.querySelector('#playerArt');
const dockToggle = document.querySelector('#dockToggle');
const statusRingCore = document.querySelector('#statusRingCore');
const volume = document.querySelector('#volume');

function selectedStation() {
  return stations.find((station) => station.id === state.selectedId) || null;
}

function renderStations() {
  stationList.innerHTML = stations.map((station, index) => {
    const active = state.selectedId === station.id;
    const playing = active && state.isPlaying;
    return `
      <article class="station-row ${active ? 'is-selected' : ''} ${playing ? 'is-playing' : ''}" style="--accent: ${station.accent}">
        <div class="station-index">0${index + 1}</div>
        <div class="station-identity">
          <div class="station-title-line">
            <h3>${station.name}</h3>
            ${playing ? '<span class="on-air-pill"><span></span> ON AIR</span>' : ''}
          </div>
          <p>${station.region}</p>
        </div>
        <div class="station-note">${station.note}</div>
        <button class="station-toggle ${playing ? 'is-on' : ''}" type="button" data-station-id="${station.id}" aria-pressed="${playing}" aria-label="Turn ${station.name} ${playing ? 'off' : 'on'}">
          <span class="toggle-label">${playing ? 'OFF' : 'ON'}</span><span class="toggle-dot"></span>
        </button>
      </article>
    `;
  }).join('');

  stationList.querySelectorAll('[data-station-id]').forEach((button) => {
    button.addEventListener('click', () => toggleStation(button.dataset.stationId));
  });
}

function updatePlayerCopy() {
  const station = selectedStation();
  if (!station) {
    heroStation.textContent = 'No station selected';
    heroState.textContent = 'Select a station below';
    playerStation.textContent = 'Choose a station';
    playerStatus.textContent = 'Ready when you are';
    playerArt.textContent = 'Z';
    statusRingCore.textContent = '—';
    dockToggle.disabled = true;
    dockToggle.innerHTML = 'ON <span>●</span>';
    return;
  }
  heroStation.textContent = station.shortName;
  heroState.textContent = state.isPlaying ? 'Signal is live' : 'Signal is off';
  playerStation.textContent = station.name;
  playerStatus.textContent = state.isPlaying ? 'Streaming now' : station.streamUrl ? 'Ready to play' : 'Stream URL pending';
  playerArt.textContent = station.shortName.slice(0, 1).toUpperCase();
  statusRingCore.textContent = state.isPlaying ? 'ON' : 'OFF';
  dockToggle.disabled = false;
  dockToggle.innerHTML = `${state.isPlaying ? 'OFF' : 'ON'} <span>${state.isPlaying ? '■' : '●'}</span>`;
  dockToggle.setAttribute('aria-label', `${state.isPlaying ? 'Turn' : 'Turn'} ${station.name} ${state.isPlaying ? 'off' : 'on'}`);
}

function stopAudio() {
  audio.pause();
  audio.removeAttribute('src');
  audio.load();
}

function toggleStation(id) {
  if (state.selectedId === id && state.isPlaying) {
    state.isPlaying = false;
    stopAudio();
  } else {
    const station = stations.find((item) => item.id === id);
    state.selectedId = id;
    state.isPlaying = true;
    stopAudio();
    if (station?.streamUrl) {
      audio.src = station.streamUrl;
      audio.play().catch(() => {
        playerStatus.textContent = 'Tap again to start audio';
      });
    }
  }
  renderStations();
  updatePlayerCopy();
}

dockToggle.addEventListener('click', () => {
  if (state.selectedId) toggleStation(state.selectedId);
});

volume.addEventListener('input', (event) => {
  audio.volume = Number(event.target.value) / 100;
});

audio.volume = Number(volume.value) / 100;
audio.addEventListener('ended', () => {
  state.isPlaying = false;
  renderStations();
  updatePlayerCopy();
});
audio.addEventListener('error', () => {
  if (state.isPlaying) playerStatus.textContent = 'Signal unavailable — check stream URL';
});

renderStations();
updatePlayerCopy();
