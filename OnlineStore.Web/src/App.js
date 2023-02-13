import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './common/components/header';
import HomePage from './features/home-page';
import ManageProductInfoPage from './features/manage-product-info-page';
import ProductPage from './features/product-page';
import ShoppingCartPage from './features/shopping-cart-page';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/manage_product_details">
            <ManageProductInfoPage />
          </Route>
          <Route path="/product_details/:id">
            <ProductPage />
          </Route>
          <Route path="/cart">
            <ShoppingCartPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
