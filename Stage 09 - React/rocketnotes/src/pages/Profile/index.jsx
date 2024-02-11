import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, DataContainer, ProfileHeader, Form, AvatarContainer } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera} from 'react-icons/fi'

export function Profile(){
    return (
        <Container>
            <ProfileHeader>
                <a href="#">
                    <FiArrowLeft />
                </a>
            </ProfileHeader>

            <AvatarContainer>
                <img src="https://github.com/llslucas115.png" />

                <label for="avatar">
                    <FiCamera />
                </label>

                <input type="file" id="avatar" />                            
            </AvatarContainer>

            <DataContainer>
                <Form>
                    <Input placeholder="Nome" icon={FiUser} type="text" /> 
                    <Input placeholder="Email" icon={FiMail} type="text" /> 
                    <Input placeholder="Senha atual" icon={FiLock} type="password" /> 
                    <Input placeholder="Nova senha" icon={FiLock} type="password" /> 
                    <Button title="Salvar" />
                </Form>
            </DataContainer>
        </Container>
    )
}