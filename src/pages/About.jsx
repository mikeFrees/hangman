import './About.css';
import { Link } from 'react-router-dom';
import HowToCard from '../components/layout/HowToCard.jsx';
import IconBack from '../assets/images/icon-back.svg?react';

function About() {
  return (
    <article>
      <header className="header--howto">
        <Link className="button--menu button--menu__back" to="/">
          <IconBack />
        </Link>
        <h1> How to Play</h1>
      </header>
      <main className="main--howto">
        <HowToCard
          step="01"
          title="Choose a category"
          description="First, choose a word category, like animals or movies. 
  The computer then randomly selects a secret word from that 
  topic and shows you blanks for each letter of the word."
        />
        <HowToCard
          step="02"
          title="Guess letters"
          description="Take turns guessing letters. The computer fills in the 
  relevant blank spaces if your guess is correct. If it's 
  wrong, you lose some health, which empties after eight incorrect guesses"
        />
        <HowToCard
          step="03"
          title="Win or lose"
          description="You win by guessing all the letters in the word before your 
  health runs out. If the health bar empties before you guess 
  the word, you lose."
        />
      </main>
    </article>
  );
}

export default About;
