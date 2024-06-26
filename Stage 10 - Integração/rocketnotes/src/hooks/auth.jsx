import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }){
    const [data, setData] = useState({});

    async function signIn({ email, password }){
        try{
            const response = await api.post("/sessions", { email, password });
            const {user, token} = response.data;

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token);

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({user, token});

            console.log(user, token);

        }catch(e){
            if(e.response){
                alert(e.response.data.message);
            }else{
                alert("Não foi possível entrar.");
            }
        }        
    }

    function signOut(){
        localStorage.removeItem("@rocketnotes:token");
        localStorage.removeItem("@rocketnotes:user");

        setData({});
    }

    useEffect( () => {
        const token = localStorage.getItem("@rocketnotes:token");
        const user = localStorage.getItem("@rocketnotes:user");

        if(token && user){
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)                
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ 
            signIn, 
            user: data.user,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}