import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';

import { Container, Content, Background, Form } from './styles';
import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp(){
    return (
        <Container>
            <Content>
                <Brand size='2' subtitle />
                <h2>Crie sua conta</h2>
                <Form>
                    <Input type='text' placeholder='Nome' icon={FiUser} />
                    <Input type='text' placeholder='E-mail' icon={FiMail} />
                    <Input type='password' placeholder='Senha' icon={FiLock} />
                    <Button title="Cadastrar" />
                </Form>
                <ButtonText title='Voltar para o login' to='/' icon={FiArrowLeft} />
            </Content>
            <Background />           
        </Container>
    )
}