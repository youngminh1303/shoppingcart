import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Shop from "./Shop"
import Cart from "./Cart"

const RouteSwitch = () => {
  let [counter, setCounter] = useState(0)
  let [items, setItems] = useState([])  
  return (
      <BrowserRouter>
          <Routes>
        <Route path="/" element={<App counter={counter} setCounter={setCounter} items={items} setItems={setItems}/>}></Route>
        <Route path="/shop" element={<Shop counter={counter} setCounter={setCounter} items={items} setItems={setItems} />}></Route>
        <Route path="/cart" element={<Cart counter={counter} setCounter={setCounter} items={items} setItems={setItems}/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default RouteSwitch