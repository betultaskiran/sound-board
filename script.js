const sounds = ["applause", "boo", "gasp", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });
  document.body.appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    document.getElementById(sound);

    song.pause();
    song.currentTime() = 0;
  });
}
