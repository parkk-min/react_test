import "./App.css";
import { Routes, Route } from "react-router-dom"
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import ConditionSelect from "./pages/ConditionSelect";
import DetailCondition from "./pages/DetailCondition";
import DisplayUserInfo from "./pages/DisplayUserInfo";
import DisplayBuyInfo from "./pages/DisplayBuyInfo";
import CreateUserInfo from "./pages/CreateUserInfo";
import Join from "./pages/Join";
import BuyUserInfo from "./pages/BuyUserInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/search" element={<ConditionSelect />}>
            <Route path="/search/detail-condition" element={<DetailCondition />} />
          </Route>
          <Route path="/displayUserInfo" element={<DisplayUserInfo />} />
          <Route path="/displayBuyInfo/:userid" element={<DisplayBuyInfo />} />
          <Route path="join" element={<Join />}>
            <Route path="/join/create-userinfo" element={<CreateUserInfo />} />
            <Route path="/join/buy-userinfo" element={<BuyUserInfo />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
