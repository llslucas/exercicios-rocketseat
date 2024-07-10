import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Container, User } from "./styles";
import { Brand } from '../Brand';
import { Input } from '../Input';

export function Header({onChange}){
    const { user, signOut } = useAuth();    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <Brand />
            <Input 
                placeholder='Pesquisar pelo titulo' 
                onChange={onChange}
            />
            <User>
                <div>
                    <Link to="/profile">
                        <h2>{ user.name }</h2>
                    </Link>
                    <button onClick={signOut}>
                        sair
                    </button>                    
                </div>
                <Link to="/profile">
                    <img src={ avatarUrl } />
                </Link>
            </User>
        </Container>        
    )
}