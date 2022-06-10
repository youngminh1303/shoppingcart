import logo from "./imgs/logo.svg"
import "./styles/nav.css"
const Navbar = ({counter, showCounter}) => {
  return (
      <nav>
              <img src={logo} alt="logo"></img>
              <ul>
                  <li><a href="/">Home</a></li>
                 <li><a href="/shop">Shop</a></li>
                  <li><a href="/cart">Cart</a></li>
                  {showCounter && <li>{counter}</li>}
              </ul>
    </nav>
  )
}

export default Navbar