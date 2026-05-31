import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const {logout} = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/loginform");
  };

  return (
    <>
    <div className="container mt-4 d-flex flex-column align-items-center" style={{backgroundColor:"#d18005", color:"white", padding:"20px", borderRadius:"10px"}}>
      <h1 ><em>Mi Perfil</em></h1>
      <p>Bienvenido a tu perfil. Aquí puedes ver y editar tu información personal, <br/>revisar tus pedidos anteriores y gestionar tus preferencias.</p>
      <div className="d-flex flex-column align-items-center gap-3" style={{backgroundColor:"#d68e22", color:"white", padding:"20px", borderRadius:"10px"}}>
      <h4>Información Personal</h4>
      <p><strong>Nombre:</strong> Isidora Muñoz</p>
      <p><strong>Email:</strong> isidora.munoz@example.com</p>
      </div>
      <button className="btn btn-warning mt-3" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
    </>

  );
}