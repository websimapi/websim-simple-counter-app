import { playClickSound } from 'sound-utils';

let count = 0;
const display = document.getElementById('counter-display');
const button = document.getElementById('increment-button');

button.addEventListener('click', () => {
    count++;
    display.textContent = count;
    
    // Play sound effect
    // NOTE: AudioContext generally requires user interaction to initialize,
    // which is handled by placing this inside the click handler.
    playClickSound();

    // Add a visual feedback class briefly
    display.classList.remove('pulse'); // Reset animation
    // Force reflow/repaint to restart CSS animation
    void display.offsetWidth; 
    display.classList.add('pulse');
});

