const playBallSoundEffect = (soundNumber: number) => {
const sound = require(`../assets/audio/${soundNumber}.wav`)
const audio = new Audio(sound);

audio.play().catch((error) => {
  console.log("error playing sound: ", error);
  //  when an exception is played, the exception flow is followed
});
}

export default playBallSoundEffect;