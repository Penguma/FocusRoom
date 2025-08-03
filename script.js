// script.js

// Begrüßung beim Laden der Seite
window.addEventListener('load', () => {
  console.log('FocusBoard ist bereit!');
});

// Funktion für den Button
function startFocusSession() {
  alert('Fokus-Session gestartet! 🚀');
}

// Optional: Timer-Funktion (einfacher Countdown)
function startTimer(duration) {
  let timer = duration, minutes, seconds;
  const interval = setInterval(() => {
    minutes = Math.floor(timer / 60);
    seconds = timer % 60;

    console.log(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
    timer--;

    if (timer < 0) {
      clearInterval(interval);
      alert('Zeit ist um! 🎉');
    }
  }, 1000);
}
