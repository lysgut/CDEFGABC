const playBTN = document.getElementById("play-btn");
const synth = new Tone.Synth().toDestination();
const now = Tone.now()
playBTN.addEventListener("click", () => {
    console.log('entro')
})