const musicArray = [
  ["Beautiful Things", "Benson Boone", "bt.png.jpg", "590K", "5M", "Benson Boone – Beautiful Things _ Lirik Terjemahan-yt.savetube.me.mp3"],
  ["Desember", "Neck Deep", "d.png.jpg", "3.2M", "726M", "Neck Deep - December-yt.savetube.me.mp3"],
  ["Sweet Scars", "Weird Genius", "SS.png.jpg", "2.1M", "4.2M", "Weird Genius - Sweet Scar (ft. Prince Husein) Official Music Video-yt.savetube.me.mp3"],
  ["Mind Over Matter", "Young the Giant", "m.png.jpg", "6M", "8.3M", "Young The Giant - Mind Over Matter (Lyrics)-yt.savetube.me.mp3"]
];

const musicList = document.getElementById("music-list");

musicArray.forEach((song, index) => {
  const card = document.createElement("div");
  card.className = "card";

  const audioKU = `audio-${index}`; 

  card.innerHTML = `
    <h2>${song[0]}</h2>
    <p>${song[1]}</p>
    <img src="${song[2]}" alt="${song[0]}">
    <p>
      <button id="like">❤</button> ${song[3]} <span> | </span> 👁 ${song[4]}
    </p>
    <button class="play-button" onclick="putarAudio('${audioKU}')">▶</button>
    <audio id="${audioKU}" src="${song[5]}"></audio>
  `;

  musicList.appendChild(card);
});

function putarAudio(audioKU,button) {
  const audio = document.getElementById(audioKU);

  document.querySelectorAll("audio").forEach(a => {
    if (a.id !== audioKU) {
      a.pause();
      a.currentTime = 0;
    }
  });

  if (audio.paused) {
    audio.play();
    button.textContent = '❚❚'; 
  } else {
    audio.pause();
    button.textContent = '▶'; 
  }

  document.querySelectorAll(".play-button").forEach(btn => {
    if (btn !== button) btn.textContent = "▶";
  });
}

