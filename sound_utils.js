// Function to play a simple click sound using Web Audio API
export function playClickSound() {
    // Initialize AudioContext lazily on user interaction
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
        console.warn("Web Audio API not supported.");
        return;
    }
    
    const audioContext = new AudioContext();

    // Create oscillator
    const oscillator = audioContext.createOscillator();
    // Create gain node
    const gainNode = audioContext.createGain();

    // Set sound parameters
    oscillator.type = 'sine'; // Sine wave for a clean beep
    oscillator.frequency.setValueAtTime(520, audioContext.currentTime); // Slightly higher pitch
    
    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Set gain envelope for a quick click
    const duration = 0.1; // 100ms click
    gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

    // Start and stop the oscillator
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
}

