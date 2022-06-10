import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Shop from "./Shop"
import Cart from "./Cart"

const RouteSwitch = () => {
  let [counter, setCounter] = useState(0)
  let [items, setItems] = useState([])  
  let [total, setTotal] = useState(0)
  return (
      <BrowserRouter>
          <Routes>
        <Route path="/shoppingcart" element={<App />}></Route>
        <Route path="/shoppingcart/shop" element={<Shop counter={counter} setCounter={setCounter} setItems={setItems} total={total} setTotal={setTotal} />}></Route>
        <Route path="/shoppingcart/cart" element={<Cart counter={counter} setCounter={setCounter} items={items} total={total} setTotal={setTotal} setItems={setItems}/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default RouteSwitch