import React from 'react';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import ItemList from './pages/ItemList';  
import Cart from './pages/Cart';  
import OrderConfirmation from './pages/OrderConfirmation';  

const App: React.FC = () => {  
    return (  
        <Router>  
            <Switch>  
                <Route path="/" exact component={ItemList} />  
                <Route path="/cart" component={Cart} />  
                <Route path="/order-confirmation" component={OrderConfirmation} />  
            </Switch>  
        </Router>  
    );  
};  

export default App;  