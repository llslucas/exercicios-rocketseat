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
                    <h2>Lucas Souza</h2>
                    <button>sair</button>                    
                </div>
                <img src='https://github.com/llslucas115.png' />
            </User>
        </Container>        
    )
}