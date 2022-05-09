import Navbar from "./navbar";
import Hero from "./hero";
import Cart from "./cart";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Products from "./products";
import Services from "./services";
import Footer from "./footer";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
                <Hero />
                <Cart/>
            
          </Route>
          <Route exact path="/products">
            <Products/>

            
          </Route>
          <Route exact path="/services">
            <Services />

            
          </Route>
      </Switch>
      <Footer/>
    </Router>

    </>

  );
}

export default App;
