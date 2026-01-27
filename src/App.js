import './App.css';
import Footer from "./components/Footer"
import MyForm from './components/MyForm';
import Home from './components/Home';
import Cards from './components/Cards';

export default function App() {
  return (
    <div className="App">
       <Home/>
      <MyForm />
      <Cards/>
      <Footer />
    </div>
  );
}


