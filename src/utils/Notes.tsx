import C4 from '../sounds/C4.mp3';
import D4 from '../sounds/D4.mp3';
import Db4 from '../sounds/Db4.mp3';
import E4 from '../sounds/E4.mp3';
import Eb4 from '../sounds/Eb4.mp3';
import F4 from '../sounds/F4.mp3';
import G4 from '../sounds/G4.mp3';
import Gb4 from '../sounds/Gb4.mp3';
import A4 from '../sounds/A4.mp3';
import Ab4 from '../sounds/Ab4.mp3';
import B4 from '../sounds/B4.mp3';
import Bb4 from '../sounds/Bb4.mp3';
import C5 from '../sounds/C5.mp3';
import Db5 from '../sounds/Db5.mp3';
import D5 from '../sounds/D5.mp3';
import Eb5 from '../sounds/Eb5.mp3';
import E5 from '../sounds/E5.wav';

export const playNote = (note: string, volume?:number) => {
  const audio = new Audio(note);
  audio.play();  
};

export { C4, Db4, D4, Eb4, E4, F4, Gb4, G4, Ab4, A4, Bb4, B4, C5, Db5, D5, Eb5, E5 }