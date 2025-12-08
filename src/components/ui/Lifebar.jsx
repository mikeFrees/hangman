import HeartIcon from '../../assets/images/icon-heart.svg?react';
import './Lifebar.css';

function Menu({ life }) {
  return (
    <div className="lifebar--container">
      <div className="lifebar">
        <div className="lifebar--life" style={{ '--life': life }}></div>
      </div>
      <HeartIcon />
    </div>
  );
}

export default Menu;
