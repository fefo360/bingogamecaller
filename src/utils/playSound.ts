const audioSources = new Map<number, string>();
const playerAudio = new Audio();

let audioUnlocked = false;
let preloaded = false;

playerAudio.preload = "auto";

const getAudioSource = (soundNumber: number) => {
  if (!audioSources.has(soundNumber)) {
    const sound = require(`../assets/audio/${soundNumber}.wav`);
    audioSources.set(soundNumber, sound);
  }

  return audioSources.get(soundNumber);
};

const preloadAudioSources = () => {
  if (preloaded) {
    return;
  }

  for (let i = 1; i <= 75; i += 1) {
    getAudioSource(i);
  }

  preloaded = true;
};

export const unlockAudioPlayback = async () => {
  if (audioUnlocked) {
    return true;
  }

  try {
    preloadAudioSources();

    const source = getAudioSource(1);

    if (!source) {
      return false;
    }

    playerAudio.src = source;
    playerAudio.muted = true;
    playerAudio.currentTime = 0;

    await playerAudio.play();

    playerAudio.pause();
    playerAudio.currentTime = 0;
    playerAudio.muted = false;
    audioUnlocked = true;

    return true;
  } catch (error) {
    console.log("Error unlocking audio playback: ", error);
    playerAudio.muted = false;
    return false;
  }
};

const playBallSoundEffect = async (soundNumber: number) => {
  try {
    const source = getAudioSource(soundNumber);

    if (!source) {
      console.log(`Audio source for sound number ${soundNumber} not found`);
      return;
    }

    if (playerAudio.src !== source) {
      playerAudio.src = source;
    }

    playerAudio.pause();
    playerAudio.currentTime = 0;

    await playerAudio.play();
  } catch (error) {
    console.log("Error playing sound: ", error);
  }
};

export default playBallSoundEffect;
