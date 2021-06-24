import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Publicidad from './Components/Publicidad/Publicidad';
import SeccionAdopcion from './Components/SeccionAdopcion/SeccionAdopcion';
import SeccionPerdidos from './Components/SeccionPerdidos/SeccionPerdidos';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Publicidad />
        <SeccionAdopcion />
        <SeccionPerdidos />
        <Publicidad />
      </div>
      <Footer />
    </div>
  );
}

export default App;
