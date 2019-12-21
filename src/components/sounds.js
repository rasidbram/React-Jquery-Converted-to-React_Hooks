
import Cave from '../Audio/Cave.mp3';
import News from '../Audio/News.mp3';


function RemoveSound() {
    new Audio(Cave).play();
  }
  function toggleSound() {
    new Audio(News).play();
  }

  export default RemoveSound;
  export {toggleSound};