import { Link } from "react-router-dom";

function Menu({disableMenu}) {
  return (
    <nav>
      <button onClick = {disableMenu}>Game</button>
      <Link to='/category'>Category</Link>
      <Link to='/'>Home</Link>
    </nav>
  );
}

export default Menu;
