import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Container, Header, Content, Group, Avatar } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Profile(){
    return (
        <Container>
            <Header>
                <ButtonText title='Voltar' icon={FiArrowLeft} to="/" />
            </Header>

            <Avatar>
                <img src="https://github.com/llslucas115.png" alt="Foto de perfil do usuário" />
                <label for='fileInput'>
                    <FiCamera />
                </label>
                <input type='file' id='fileInput' />
            </Avatar>

            <Content>
                <Group>
                    <Input type='text' icon={FiUser} placeholder="Nome Completo" />
                    <Input type='text' icon={FiMail} placeholder="Endereço de e-mail" />
                </Group>
                <Group>
                    <Input type='password' icon={FiLock} placeholder="Senha atual" />
                    <Input type='password' icon={FiLock} placeholder="Nova senha" />
                </Group>
                <Button title="Salvar" />
            </Content>
        </Container>
    );
};