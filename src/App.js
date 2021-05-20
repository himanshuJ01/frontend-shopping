import React, { useEffect } from "react";
import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import HomePage from "./containers/HomePage";
import ProductListPage from "./containers/ProductListPage";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, updateCart } from "./actions";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import CartPage from "./containers/CartPage";
import CheckoutPage from "./containers/CheckoutPage";
import OrderPage from "./containers/OrderPage";
import OrderDetailsPage from "./containers/OrderDetailsPage";

function App() {
   
  
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  useEffect(() => {
    console.log("App.js - updateCart");
    dispatch(updateCart());
  }, [auth.authenticate]);

  const history = useHistory();

  useEffect(() => {
    alanBtn({
      key:
        "962f3ba01d0d1bd9720d73bede2626112e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command }) => {
       
        if (command === "cart") {
          history.push("/cart");
        }
        if (command === "checkout") {
          history.push("/checkout");
        }
        if (command === "homePage") {
          history.push(`/`);
        }
      },
    });
    
  }, [history]);
 


  return (
    <div className="App"> 
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/account/orders" component={OrderPage} />
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />
          <Route
            path="/:productSlug/:productId/p"
            component={ProductDetailsPage}
          />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
