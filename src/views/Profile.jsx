import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Profile() {
  const {user, getProfile, logout} = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/profile");
  };
  
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
    <div className="container mt-4 d-flex flex-column align-items-center" style={{backgroundColor:"#d18005", color:"white", padding:"20px", borderRadius:"10px"}}>
      <h1 ><em>Mi Perfil</em></h1>
      <p>Bienvenido a tu perfil. Aquí puedes ver y editar tu información personal, <br/>revisar tus pedidos anteriores y gestionar tus preferencias.</p>
      <div className="d-flex flex-column align-items-center gap-3" style={{backgroundColor:"#d68e22", color:"white", padding:"20px", borderRadius:"10px"}}>
      <h4>Información Personal</h4>
      <p><strong>Nombre:</strong> {user?.id}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      </div>
      <button className="btn btn-warning mt-3" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
    </>

  );
}