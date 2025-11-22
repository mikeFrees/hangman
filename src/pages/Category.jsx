import "./Category.css";
import { Link } from "react-router-dom";

function Category() {
  return (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/game'>Game</Link>
  </nav>
  );
}

export default Category;