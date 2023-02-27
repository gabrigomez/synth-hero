import C4 from '../sounds/C4.mp3';
import D4 from '../sounds/D4.mp3';
import Db4 from '../sounds/Db4.mp3';
import E4 from '../sounds/E4.mp3';
import Eb4 from '../sounds/Eb4.mp3';

export const playC4 = () => {
  const audio = new Audio(C4)
  audio.play();
};

export const playD4 = () => {
  const audio = new Audio(D4)
  audio.play();
};

export const playDb4 = () => {
  const audio = new Audio(Db4)
  audio.play();
};

export const playE4 = () => {
  const audio = new Audio(E4)
  audio.play();
};

export const playEb4 = () => {
  const audio = new Audio(Eb4)
  audio.play();
};

window.addEventListener("keydown", ({ key }) => {
  if(key === 'a') return playC4();

  if(key === 'w') return playDb4();

  if(key === 's') return playD4();

  if(key === 'e') return playEb4();

  if(key === 'd') return playE4();
})