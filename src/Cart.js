import Navbar from "./components/Navbar"
import { useState, useEffect } from "react"
import Footer from "./components/Footer"
import CardinCart from "./components/CardinCart"

const Cart = ({ total, counter, items, setTotal,setItems }) => {
  let [itemList, setItemList] = useState([])


  useEffect(() => {

    items.forEach(element => {
      setItemList(prev => [...prev].concat(<CardinCart key={element.src} item={element} setItems={setItems} />))
      setTotal(prev => prev + element.price * element.quantity)
    });

    return () => {
      setItemList([])
      setTotal(0)
    
    }
  }, [items, setTotal, setItems])
  
  return (
      <div className="Cart">
          <Navbar counter={counter} showCounter={true} />          
      <div className="cardsection">
        {itemList}
      </div>
      {total===0 && <p className="total">You didn't choose any waifu, choose some please!</p>}
      <p className="total">Total: ${total}</p>
      {total !== 0 &&<button>CHECKOUT</button>}
      <Footer />
    </div>
  )
}

export default Cart