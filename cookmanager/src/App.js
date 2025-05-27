import { Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import SelectOrderInfo from "./pages/SelectOrderInfo";
import DisplayOrderInfo from "./pages/DisplayOrderInfo";
import DisplayBookInfo from "./pages/DisplayBookInfo";
import DisplayBookOrderInfo from "./pages/DisplayBookOrderInfo";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/orderinfo" element={<SelectOrderInfo />}>
            <Route path="/orderinfo/data" element={<DisplayOrderInfo />}></Route>
            <Route path="/orderinfo/bookinfo/:bookid" element={<DisplayBookInfo />}></Route>
            <Route path="/orderinfo/bookinfo/bookorderinfo" element={<DisplayBookOrderInfo />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
