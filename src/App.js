import React from 'react';
import './App.scss';
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './contexts/CartContext';
// import { CartContext } from './contexts/CartContext';

function App() {
  return <CartProvider>
  
    <BrowserRouter>

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
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
}

export default App;
