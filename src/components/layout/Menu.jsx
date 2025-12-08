import { Link } from "react-router-dom";

function Menu({toggleMenu}) {
  return (
    <nav>
      <button onClick = {toggleMenu}>Game</button>
      <Link to='/category'>Category</Link>
      <Link to='/'>Home</Link>
    </nav>
  );
}

export default Menu;
