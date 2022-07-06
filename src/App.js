import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import './App.css';
import ProductView from './Components/Product View/product-view-component';
import Header from './Components/Header/header-component';
import Register from './Routes/Register/register-component';
import LogIn from './Routes/LogIn/login-component';
import Footer from './Components/Footer/footer-component';
import Homepage from './Components/Homepage/homepage-component';
import { UserContext } from './Context/user-context';

function App() {

  const { isLogIn, isSignIn } = useContext(UserContext);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Homepage />} />
        <Route path='/productview' element={<ProductView />} />
        <Route path='/register' element={isSignIn ? <Homepage /> : <Register />} />
        <Route path='/login' element={isLogIn ? <Homepage /> : <LogIn />  }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
