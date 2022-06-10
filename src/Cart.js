import Navbar from "./components/Navbar"
import { useState, useEffect } from "react"
import Footer from "./components/Footer"
import CardinCart from "./components/CardinCart"

const Cart = ({ counter, items }) => {
  let [itemList, setItemList] = useState([])


  useEffect(() => {
    items.forEach(element => {
      setItemList(prev => setItemList([...prev].concat(<CardinCart key={element.src} item={element} />)))
    });
  }, [items])
  
  return (
      <div className="Cart">
          <Navbar counter={counter} showCounter={true} />          
      <div className="cardsection">
        {itemList}
        </div>
      <Footer />
    </div>
  )
}

export default Cart