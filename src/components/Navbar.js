import logo from "./imgs/logo.svg"
import "./styles/nav.css"
const Navbar = () => {
  return (
      <nav>
              <img src={logo} alt="logo"></img>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/shop">Shopping</a></li>
              </ul>
    </nav>
  )
}

export default Navbar