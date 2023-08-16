const synth = new Tone.Synth().toDestination();
const minorScale = [0, 2, 3, 5, 7, 8, 9, 11];
const majorScale = [0, 2, 4, 5, 7, 9, 11, 12];
const sounds = [
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 
  'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5',
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6'
];

const h = document.getElementsByClassName('h');
for (let i = 0; i < h.length; i++) {
  h[i].addEventListener("click", function() {
    console.log("Se hizo clic en " + sounds[i]);
    synth.triggerAttackRelease(sounds[i], "8n");
  });
}

const playButtom = document.getElementById("play");
playButtom.addEventListener("click", async () => {
    const RootNote = document.getElementById("tono");
    const EscalaMAYME = document.getElementById("escalas");
    const Escala = EscalaMAYME.value;
    const tono = RootNote.value;
    console.log(tono)
    if (Escala === "1") {
        let armonizacion = [0, 2, 4, 5, 7, 9, 11, 12];
        for (const st of armonizacion) {
            let nota= sounds[parseInt(tono) + st]
            let tecla = document.getElementById(nota)
            tecla.style.background = "#BBB"
            synth.triggerAttackRelease(nota, "8n");
            await new Promise(resolve => setTimeout(resolve, 500));
            
        }
    }
    else if(Escala === "0") {
        let armonizacionn = [0, 2, 3, 5, 7, 8, 10, 12];
        for (const i of armonizacionn) {
            let nota= sounds[parseInt(tono) + i]
            synth.triggerAttackRelease(nota, "8n");
            await new Promise(resolve => setTimeout(resolve, 500));

        }
    }
});