import './App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';

function App() {
  return <BrowserRouter>

    <NavBar />
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/item-detail/:id">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/category/:category">
          <ItemListContainer />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      <Footer />
    </Switch>
  </BrowserRouter>
}

export default App;
