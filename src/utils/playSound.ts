// Define an array to store preloaded audio elements
const preloadedAudio: any[] = [];

const preloadAudioFiles = async () => {
  for (let i = 1; i <= 75; i++) {
    try {
      // Dynamically import the audio file
      const audioModule = await import(`../assets/audio/${i}.wav`);
      const audioFile = audioModule.default;
      
      // Create an audio element
      const audio = new Audio(audioFile);
      
      // Preload the audio file
      audio.preload = 'auto';
      
      // Wait for the audio to be fully loaded and buffered
      await new Promise((resolve, reject) => {
        audio.addEventListener('canplaythrough', resolve);
        audio.addEventListener('error', reject);
      });

      // Store the preloaded audio element in the array
      preloadedAudio.push(audio);
    } catch (error) {
      console.error(`Error preloading audio file ${i}:`, error);
    }
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
