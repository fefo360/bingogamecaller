const preloadedAudio = new Map<number, HTMLAudioElement>();
let activeAudio: HTMLAudioElement | null = null;
let playbackToken = 0;
let audioUnlocked = false;

const getAudio = (soundNumber: number) => {
  if (!preloadedAudio.has(soundNumber)) {
    const sound = require(`../assets/audio/${soundNumber}.wav`);
    const audio = new Audio(sound);
    audio.preload = "auto";
    preloadedAudio.set(soundNumber, audio);
  }

  return preloadedAudio.get(soundNumber);
};

export const unlockAudioPlayback = async () => {
  if (audioUnlocked) {
    return true;
  }

  try {
    const audio = getAudio(1);

    if (!audio) {
      return false;
    }

    audio.muted = true;
    audio.currentTime = 0;

    await audio.play();

    audio.pause();
    audio.currentTime = 0;
    audio.muted = false;
    audioUnlocked = true;

    return true;
  } catch (error) {
    console.log("Error unlocking audio playback: ", error);
    return false;
  }
};

const playBallSoundEffect = async (soundNumber: number) => {
  try {
    const audio = getAudio(soundNumber);

    if (!audio) {
      console.log(`Audio element for sound number ${soundNumber} not found`);
      return;
    }

    playbackToken += 1;
    const currentToken = playbackToken;

    if (activeAudio && activeAudio !== audio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    }

    audio.pause();
    audio.currentTime = 0;
    activeAudio = audio;

    await audio.play();

    if (currentToken !== playbackToken) {
      audio.pause();
      audio.currentTime = 0;
    }
  } catch (error) {
    console.log("Error playing sound: ", error);
  }
};

export default playBallSoundEffect;
