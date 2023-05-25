import { createContext, useContext } from "react";

export const authContext = createContext();

const useAuth = () => {
    const context = useContext(authContext)
}

export function AuthProvider({ children }) {
    const user = {
        login: true,
    };

    return <authContext.Provider value={{ user }}>{children}</authContext.Provider>;
}
