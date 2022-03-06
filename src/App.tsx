import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/order-summary' element={<OrderSummary />} />
      </Routes>
    </>
  );
}

export default App;
