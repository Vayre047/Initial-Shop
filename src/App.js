import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/header-component';
import Register from './Routes/Register/register-component';
import LogIn from './Routes/LogIn/login-component';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LogIn />}/>
      </Routes>
    </div>
  );
}

export default App;
