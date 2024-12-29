import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemListPage from './pages/ItemListPage';
import CartPage from './pages/CartPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ItemListPage} exact />
        <Route path="/cart" component={CartPage} />
        <Route path="/order-confirmation" component={OrderConfirmationPage} />
      </Switch>
    </Router>
  );
};

export default App;