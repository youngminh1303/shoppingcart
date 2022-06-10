
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar counter={0} showCounter={false}  />
      <section>
        <h1>Welcome to the waifu shop</h1>
        <a href='/shop'><button>Go Shopping Right Now!</button></a>
      </section>
    </div>
  );
}

export default App;
