import { useState } from 'react';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../Contexts/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';



function LoginForm() {
    const [email, setEmail] = useState("");
    const { login } = useContext(UserContext);
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleChangeEmail = (evento) => {
        setEmail(evento);
    }
    const handleSubmit = async (evento) => {
        evento.preventDefault();
        if(password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return;
        }
        const success = await login(email, password);
        if (success) {
            navigate("/");
        }
    };
    return (
        <>
        <form className="LoginForm m-5 d-flex flex-column align-items-center" style={{backgroundColor:"#e65c00", color:"white", padding:"20px", borderRadius:"10px"}} action="" onSubmit={(evento) => handleSubmit(evento)}>
            <h2 className="mt-3">Mi cuenta</h2>
            
            <label htmlFor="email">Ingrese su correo electrónico</label>
            <br />
            <input type="email" className="rounded" placeholder="ejemplo@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label htmlFor="Contraseña">Ingrese su contraseña</label>
            <br />
            <input type="password" className="rounded" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button className="btn btn-light m-3" type="submit">Iniciar Sesión</button>
            
        </form>
        </>
        
    );
}
export default LoginForm;