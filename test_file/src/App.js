import { Route, Routes } from 'react-router-dom';
import MenuList from './MenuList';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MenuList />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
