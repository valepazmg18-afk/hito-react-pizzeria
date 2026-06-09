import { createContext, useState, useEffect} from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            console.log("Respuesta del servidor:", data);
            if (data.error) {
                alert(data.error);
                return false;
            }else {
                alert("Sesión Iniciada");
                let userLogged = { email: data.email, token: data.token };
                setUser(userLogged);
                localStorage.setItem("user", JSON.stringify(userLogged));
                return true;
            }
    };

    const register = async (email, password) => {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.error) {
            alert(data.error);
            return;
        }else {
            alert("Usuario registrado");
            let userLogged = { email: data.email, token: data.token };
            setUser(userLogged);
            localStorage.setItem("user", JSON.stringify(userLogged));
            console.log("Usuario registrado:", userLogged);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const getProfile = async () => {
        const response = await fetch("http://localhost:5000/api/auth/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}` 
            }
        });
        const data = await response.json();
        if (data.error) {
            alert(data.error);
            return;
        }else {
            setUser({
                ...user,
                ...data
            });
        }
    };

    useEffect(() => {
        const savedUser = localStorage.getItem("user");

        if (savedUser) {
        setUser(JSON.parse(savedUser));
        }
    }, []);


    return (
        <UserContext.Provider value={{ user, login, register, logout, getProfile }}>
            {children}
        </UserContext.Provider>
    );
}
