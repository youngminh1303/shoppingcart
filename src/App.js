import { Link  } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar counter={0} showCounter={false}  />
      <section>
        <h1>Welcome to the waifu shop</h1>
        <Link to='/shop'><button>Go Shopping Right Now!</button></Link>
      </section>
    </div>
  );
}

export default App;
