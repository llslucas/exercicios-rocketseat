import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { api } from '../../services/api';

import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";

export function Header(){
    const navigate = useNavigate();

    const { signOut, user } = useAuth();

    function handleSignOut(){
        navigate("/");

        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <Profile to="/profile">
                <img 
                    src={ avatarUrl } 
                    alt={ user.name } 
                />
                <div>
                    <span>Bem vindo,</span>
                    <strong>{ user.name }</strong>
                </div>
            </Profile>
            <Logout onClick={ handleSignOut }>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}