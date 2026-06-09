import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './views/Home';
import Cart from './views/Cart';
import LoginForm from './views/LoginForm';
import RegisterPage from './views/RegisterPage';
import NotFound from './views/NotFound';
import Pizza from './components/Pizza';
import Profile from './views/Profile';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './Contexts/UserContext';
import { Nav } from 'react-bootstrap';
import NavbarComponent from './components/Navbar';

function App() {
  const { user } = useContext(UserContext);
  console.log("user:", user);

  return (
    <>
    <NavbarComponent />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/loginform" element={!user ? <LoginForm /> : <Navigate to="/" />} />
        <Route path="/registerpage" element={!user ? <RegisterPage /> : <Navigate to="/" />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/loginform" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </>
  ) 
}

export default App;
