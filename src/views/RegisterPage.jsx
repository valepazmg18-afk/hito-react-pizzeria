import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";


export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const { register } = useContext(UserContext);

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        if(!email || !password || !confirmPassword || password !== confirmPassword || password.length < 6) {
            alert("Por favor, verifica que todos los campos esten completos, la contraseña debe tener al menos 6 caracteres");
            return;
        }
         await register(email, password);
        navigate("/"); 
    };
    return (
        <>
        <form className="loginForm m-5 d-flex flex-column align-items-center" style={{backgroundColor: "#ffa366", padding:"20px", borderRadius:"10px"}} onSubmit={(evento) => handleSubmit(evento)}>
            <h2 className="mt-3">Crear una Cuenta</h2>
            <label htmlFor="email">Ingrese su correo electrónico</label>
            <br />
            <input type="email" className="rounded" placeholder="ejemplo@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label htmlFor="password">Ingrese su contraseña</label>
            <br />
            <input type="password" className="rounded" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <label htmlFor="confirmPassword">Confirme su contraseña</label>
            <br />
            <input type="password" className="rounded" placeholder="******" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <br />
            <button className="btn btn-dark m-3" type="submit">Registrarse</button>

        </form>
        </>
    );
}