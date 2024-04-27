
import './App.css';
import Navbar  from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Herosecond from './components/herosecond/herosecond';
import Footer from './components/footer/footer'
import Herothird from './components/herothird/herothird';



function App() {
  return (
    <div className="App">


    <Navbar></Navbar>
      <Hero></Hero>
      <Herosecond></Herosecond>
      <Herothird></Herothird>

      <Footer></Footer>
    
   
    </div>
  );
}

export default App;
