import Navbar from "./components/Navbar"
import { useState } from "react"
import Footer from "./components/Footer"
import CardinCart from "./components/CardinCart"

const Cart = ({ counter, setCounter, items, setItems }) => {
  let [total, setTotal] = useState(0)
  return (
      <div className="Cart">
          <Navbar counter={counter} showCounter={true} />          
      <div className="cardsection">
        {items.forEach(element => {
           return <CardinCart item={element} /> 
        })}
          <p>Total: ${total}</p>
          </div>
      <Footer />
    </div>
  )
}

export default Cart