let Synth = import("https://unpkg.com/tone@14.7.77/build/eTone.js"); 
const synth = new Tone.Synth().toDestination();
let sounds = [
    'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5',
    'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6',
    'C7', 'C#7', 'D7', 'D#7', 'E7', 'F7', 'F#7', 'G7', 'G#7', 'A7', 'A#7', 'B7'
  ];
const h = document.getElementsByClassName('h');

for (let i = 0; i < h.length; i++) {
  h[i].addEventListener("click", function() {
      console.log("Se hizo clic en " + sounds[i]);
      synth.triggerAttackRelease(sounds[i], "8n");
  });
}

const play = document.getElementById('play')

play.addEventListener("click", function () {
    tono = document.getElementById('tono')
    escala = document.getElementById('escalas')
    let escalaSelect = escala.value
    let t = tono.value
    console.log('tono es =' + t)
    console.log('entro en escala mayor tio')
    const now = Tone.now
    synth.triggerAttack('D4', now);
    /*synth.triggerAttack(sounds[t+2], now + 0.5);
    synth.triggerAttack(sounda[t+2], now + 1);
    synth.triggerAttack(sounds[t+1], now + 1.5);
    synth.triggerAttack(sounds[t+2], now + 2);
    synth.triggerRelease([sounds[t], sound[t+2], sound[t+4], sound[t+5], sound[t+7]], now + 4);*/
})