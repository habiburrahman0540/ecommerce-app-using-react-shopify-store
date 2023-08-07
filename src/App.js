
import './App.css';
import HomePage from './pages/HomePage'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import NavMenu from './components/NavMenu';
import Footer from "./components/Footer"
function App() {

  return (
    <div className="App">
      <Router>
     <NavBar/>
     <NavMenu/>
     <Cart/>
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products/:handle' element={<ProductPage/>} />
        </Routes>
        <Footer/>
      </Router>
   
    </div>
  );
}

export default App;
