import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <nav>
      <Link to='/about'>About</Link>
      <Link to='/category'>Category</Link>
    </nav>
  );
}

export default Home;
