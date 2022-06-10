//Import components
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"

//Import imgs to use
import yukino from "./waifus/yukino.jpg"
import rikka from "./waifus/rikkatakanashi.png"
import zerotwo from "./waifus/zerotwo.png"
import rikkatakarada from "./waifus/rikkatakarada.png"
import yukinagato from "./waifus/yukinagato.jpg"
import megumin from "./waifus/megumin.png"
const Shop = ({setTotal, counter, setCounter, setItems}) => {
  return (
      
        <div className="Shop">
        <Navbar counter={counter} showCounter={true} />
           <h1>SHOPPING</h1>
        <div id="shop">
          <Card title="Yukino Yukinoshita" src={yukino} price={69} setCounter={setCounter} setTotal={setTotal} setItems={setItems} />
          <Card title="Zero Two" src={zerotwo} price={69} setCounter={setCounter} setTotal={setTotal} setItems={setItems}/>
        <Card title="Rikka Takanashi" src={rikka} price={90} setCounter={setCounter} setTotal={setTotal} setItems={setItems}/>
          <Card title="Rikka Takarada" src={rikkatakarada} price={69} setCounter={setCounter} setTotal={setTotal} setItems={setItems}/>
          <Card title="Yuki Nagato" src={yukinagato} price={69} setCounter={setCounter} setItems={setItems} setTotal={setTotal} />
          <Card title="Megumin" src={megumin} price={90} setCounter={setCounter} setItems={setItems} setTotal={setTotal} />
        </div>
        <Footer />
      </div>
      
      
  )
}

export default Shop