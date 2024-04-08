// Define an array to store preloaded audio elements
const preloadedAudio: any[] = [];

const preloadAudioFiles = () => {
  for (let i = 1; i <= 75; i++) {
    const audioFile = require(`../assets/audio/${i}.wav`);
    const audio = new Audio(audioFile);
    audio.preload = 'auto';
    // Store the preloaded audio element in the array
    preloadedAudio.push(audio);
  }
};

// Call the preload function when your application starts or when the relevant component mounts
// For example, in your main App component or in a useEffect hook in your component
// For class-based components, you can call it in componentDidMount lifecycle method
preloadAudioFiles();


const playBallSoundEffect = (soundNumber: number) => {
  try {
    // Get the preloaded audio element corresponding to the soundNumber
    const audio = preloadedAudio[soundNumber - 1];

    // Check if the audio element exists
    if (audio) {
      // Reset the currentTime property to 0 to restart the playback
      audio.currentTime = 0;
      // Play the audio
      audio.play();
    } else {
      console.log(`Audio element for sound number ${soundNumber} not found`);
    }
  } catch (error) {
    console.log("Error playing sound: ", error);
  }
}

export default playBallSoundEffect;
