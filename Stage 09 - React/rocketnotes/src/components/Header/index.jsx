import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return (
        <Container>
            <Profile >
                <img src="https://github.com/llslucas115.png" alt="Imagem de Perfil do Usuário" />
                <div>
                    <span>Bem vindo,</span>
                    <strong>Lucas Souza</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}