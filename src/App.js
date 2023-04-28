import './App.css';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import { BrowserRouter , Routes , Route } from 'react-router-dom';


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/calculator" element={<Calculator />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
