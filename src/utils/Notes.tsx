import C4 from '../sounds/C4.mp3';
import D4 from '../sounds/D4.mp3';
import Db4 from '../sounds/Db4.mp3';
import E4 from '../sounds/E4.mp3';
import Eb4 from '../sounds/Eb4.mp3';

export const playNote = (note: string) => {
  const audio = new Audio(note)
  audio.play();
};

// export const playD4 = () => {
//   const audio = new Audio(D4)
//   audio.play();
// };

// export const playDb4 = () => {
//   const audio = new Audio(Db4)
//   audio.play();
// };

// export const playE4 = () => {
//   const audio = new Audio(E4)
//   audio.play();
// };

// export const playEb4 = () => {
//   const audio = new Audio(Eb4)
//   audio.play();
// };

window.addEventListener("keydown", ({ key }) => {
  if(key === 'a') return playNote(C4);

  if(key === 'w') return playNote(Db4);

  if(key === 's') return playNote(D4);

  if(key === 'e') return playNote(Eb4);

  if(key === 'd') return playNote(E4);
})

export { C4, Db4, D4, Eb4, E4}