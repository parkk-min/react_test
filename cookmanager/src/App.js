import { Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
