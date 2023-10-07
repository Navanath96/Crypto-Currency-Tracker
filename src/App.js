// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home';
import Dashboardpage from './pages/Dashboard';
import CoinPage from './pages/Coin';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="dashboard" element={<Dashboardpage/>}/>
      <Route path="/coin/:id" element={<CoinPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
