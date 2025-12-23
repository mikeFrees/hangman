import { Link } from 'react-router-dom';
import './Menu.css';
import { useContext} from 'react';
import { GameContext } from '../../context/GameContext';

function Menu({ toggleMenu }) {
    const {
      status
    } = useContext(GameContext);
  return (
    <div className="overlay">
      <h1 className="pauseMenu">
        {status == 'paused' ? 'Paused' : `You ${status}`}
      </h1>
      <nav>
        <button className="button" onClick={toggleMenu}>
          {status == 'paused' ? 'Continue' : `Play again!`}
        </button>
        <Link className="button button__wide" to="/category">
          New category
        </Link>
        <Link className="button button__variant" to="/">
          Quit Game
        </Link>
      </nav>
    </div>
  );
}

export default Menu;
