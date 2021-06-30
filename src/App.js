import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Publicidad from './Components/Publicidad/Publicidad';
import SeccionAdopcion from './Components/SeccionAdopcion/SeccionAdopcion';
import SeccionPerdidos from './Components/SeccionPerdidos/SeccionPerdidos';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
        <Switch>
          <Route path="/publicidad">
            <Publicidad />
          </Route>
          <Route path="/perdidos">
            <SeccionPerdidos />
          </Route>
          <Route path="/">
            <SeccionAdopcion />
          </Route>
        </Switch>
          {/* <Publicidad /> */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
