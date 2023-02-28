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


export const playNote = (note: string) => {
  if(note === E5) { //fix the difference of volume between the notes
    const audio = new Audio(note);
    audio.volume = 0.3;
    audio.play();
  } else {
    const audio = new Audio(note);
    audio.play();
  }
};

window.addEventListener("keydown", ({ key }) => {
  if(key === 'a') return playNote(C4);

  if(key === 'w') return playNote(Db4);

  if(key === 's') return playNote(D4);

  if(key === 'e') return playNote(Eb4);

  if(key === 'd') return playNote(E4);

  if(key === 'f') return playNote(F4);

  if(key === 't') return playNote(Gb4);

  if(key === 'g') return playNote(G4);

  if(key === 'y') return playNote(Ab4);

  if(key === 'h') return playNote(A4);

  if(key === 'u') return playNote(Bb4);

  if(key === 'j') return playNote(B4);

  if(key === 'k') return playNote(C5);

  if(key === 'o') return playNote(Db5);

  if(key === 'l') return playNote(D5);

  if(key === 'p') return playNote(Eb5);

  if(key === 'ç') return playNote(E5);

});

export { C4, Db4, D4, Eb4, E4, F4, Gb4, G4, Ab4, A4, Bb4, B4, C5, Db5, D5, Eb5, E5 }