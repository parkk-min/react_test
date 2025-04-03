import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./Home";
import ProductPage from "./ProductPage";
import MenuList from "./MenuList";
import ShoppingCart from "./ShoppingCart";
import Payment from "./Payment";

function App() {
  return (
    <>
      <Provider store={store}>
        <MenuList />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/shopping_cart" element={<ShoppingCart />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
