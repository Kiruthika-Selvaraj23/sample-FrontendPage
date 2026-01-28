import { Route, Routes } from 'react-router-dom';
import './App.css';
import FrontPage from './components/FrontPage';
import SuccessLogin from './components/SuccessLogin';
import FruitsDesc from './components/FruitsDesc';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path='/successLogin' element={<SuccessLogin />} />
        <Route path="/fruitsDesc/:id" element={<FruitsDesc/>} />
      </Routes>
    </>
  );
}


