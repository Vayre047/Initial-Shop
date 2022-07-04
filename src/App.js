import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ProductDetail } from './Components/Products/product-db';
import Header from './Components/Header/header-component';
import Register from './Routes/Register/register-component';
import LogIn from './Routes/LogIn/login-component';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/product-view' element={<ProductDetail />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LogIn />}/>
      </Routes>
    </div>
  );
}

export default App;
