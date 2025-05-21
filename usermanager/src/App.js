import "./App.css";
import { Routes, Route } from "react-router-dom"
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import ConditionSelect from "./pages/ConditionSelect";
import DetailCondition from "./pages/DetailCondition";
import DisplayUserInfo from "./pages/DisplayUserInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/search" element={<ConditionSelect />}>
            <Route path="/search/detail-condition" element={<DetailCondition />} />
          </Route>
          <Route path="/displayInfo" element={<DisplayUserInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
