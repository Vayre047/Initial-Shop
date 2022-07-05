import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductView from './Components/Product View/product-view-component';
import Header from './Components/Header/header-component';
import Register from './Routes/Register/register-component';
import LogIn from './Routes/LogIn/login-component';
import Footer from './Components/Footer/footer-component';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/productview' element={<ProductView />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LogIn />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
