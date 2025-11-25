import "./Home.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg?react";
import PlayIcon from "../assets/images/icon-play.svg?react";

function Home() {
  return (
    <main className='mainMenu'>
      <Logo />
      <nav>
        <Link
          className='button--menu'
          to='/category'
        >
          <PlayIcon className='icon--play' />
        </Link>
        <Link
          className='button'
          to='/about'
        >
          How to play
        </Link>
      </nav>
    </main>
  );
}

export default Home;
