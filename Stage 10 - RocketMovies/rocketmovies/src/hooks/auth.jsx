import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }){
    const [data, setData] = useState({});

    async function signIn({ email, password }){
        try{
            const response = await api.post("/sessions", { email, password });
            const {user, token} = response.data;

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovies:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;                     
            
            setData({user, token});            

        }catch(e){
            if(e.response){
                alert(e.response.data.message);
            }else{
                alert("Não foi possível entrar.");
            }
        }        
    }

    function signOut(){
        localStorage.removeItem("@rocketmovies:token");
        localStorage.removeItem("@rocketmovies:user");        

        setData({});
    }

    async function updateProfile({ user, avatarFile }){
        try {
            if(!user){
                return alert("Não foi possível atualizar o perfil.");                
            }

            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }   

            await api.put("/users", user);    
            
            const updatedUser = {
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar
            }

            localStorage.setItem("@rocketmovies:user", JSON.stringify(updatedUser));
            setData({ user: updatedUser, token: data.token });
            alert("Perfil atualizado!");

        }catch(e){
            if(e.response){
                alert(e.response.data.message);
            }else{
                alert("Não foi possível atualizar o perfil.");
            }
        }  
    }

    useEffect( () => {
        const token = localStorage.getItem("@rocketmovies:token");
        const user = localStorage.getItem("@rocketmovies:user");

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
            signOut,
            updateProfile
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}