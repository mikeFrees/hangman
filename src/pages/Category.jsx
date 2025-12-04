import './Category.css';
import { Link } from 'react-router-dom';
import IconBack from '../assets/images/icon-back.svg?react';
import data from '../assets/data.json';
import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

function Category() {
  const categories = Object.keys(data.categories);
  const links = categories.map((category) => {
    return (
      <Link
        className="card--category"
        key={category}
        to="/game"
        onClick={() => {
          setStatus('playing');
          setCategory(category);
        }}
      >
        {category}
      </Link>
    );
  });
  const { setCategory, setStatus } = useContext(GameContext);
  return (
    <>
      <header className="header--howto header--about">
        <Link className="button--menu button--menu__back button--about" to="/">
          <IconBack />
        </Link>
        <h1>Pick a Category</h1>
      </header>
      <section className="about--section">{links}</section>
    </>
  );
}

export default Category;
