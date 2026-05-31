import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [token, setToken] = useState(false);

    const logout = () => {
        setToken(false);
    };

    return (
        <UserContext.Provider value={{ token, setToken, logout }}>
            {children}
        </UserContext.Provider>
    );
}