let Synth = import("https://unpkg.com/tone@14.7.77/build/eTone.js"); 
const synth = new Tone.Synth().toDestination();

const Do = document.getElementById('doBlanca');
Do.addEventListener('click', async () =>{
    await Tone.start();
    synth.triggerAttackRelease("C4", "8n");
    }
)