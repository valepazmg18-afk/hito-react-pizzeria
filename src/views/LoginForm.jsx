import { useState } from 'react';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../Contexts/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';



function LoginForm() {
    const [email, setEmail] = useState("");
    const { setToken } = useContext(UserContext);
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleChangeEmail = (evento) => {
        setEmail(evento);
    }
    const handleSubmit = (evento) => {
        evento.preventDefault();
        if(password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            setEmail('');
            setPassword('');
            return;
        }
        console.log("Estoy enviando el form");
        alert("Sesión Iniciada");
        setToken(true);
        navigate("/");
        setEmail('');
        setPassword('');
    }
    return (
        <>
        <form className="LoginForm m-5 d-flex flex-column align-items-center" style={{backgroundColor:"#e65c00", color:"white", padding:"20px", borderRadius:"10px"}} action="" onSubmit={(evento) => handleSubmit(evento)}>
            <h2 className="mt-3">Mi cuenta</h2>
            
            <label htmlFor="email">Ingrese su correo electrónico</label>
            <br />
            <input type="email" className="rounded" placeholder="ejemplo@email.com" value={email} onChange={(evento) => handleChangeEmail(evento.target.value)} />
            <br />
            <label htmlFor="Contraseña">Ingrese su contraseña</label>
            <br />
            <input type="password" className="rounded" placeholder="******" value={password} onChange={(evento) => setPassword(evento.target.value)} />
            <br />
            <button className="btn btn-light m-3" type="submit">Iniciar Sesión</button>
            
        </form>
        </>
        
    );
}
export default LoginForm;