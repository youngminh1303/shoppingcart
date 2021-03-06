import logo from "./imgs/logo.svg";
import "./styles/nav.css";
import { Link } from "react-router-dom";
const Navbar = ({ counter, showCounter }) => {
  return (
    <nav>
      <img src={logo} alt="logo"></img>
      <ul>
        <li>
          <Link to="/shoppingcart">Home</Link>
        </li>
        <li>
          <Link to="/shoppingcart/shop">Shop</Link>
        </li>
        <li>
          <Link to="/shoppingcart/cart">Cart</Link>
        </li>
        {showCounter && <li>{counter}</li>}
      </ul>
    </nav>
  );
};

export default Navbar;
