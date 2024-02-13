import { Link } from 'react-router-dom';

import { Container, User } from "./styles";
import { Brand } from '../Brand';
import { Input } from '../Input';

export function Header(){
    return (
        <Container>
            <Brand />
            <Input placeholder='Pesquisar pelo titulo'/>
            <User>
                <div>
                    <Link to="/profile">
                        <h2>Lucas Souza</h2>
                    </Link>
                    <button>sair</button>                    
                </div>
                <Link to="/profile">
                    <img src='https://github.com/llslucas115.png' />
                </Link>
            </User>
        </Container>        
    )
}