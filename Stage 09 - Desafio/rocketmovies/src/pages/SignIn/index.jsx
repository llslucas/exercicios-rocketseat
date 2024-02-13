import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background, Form } from './styles';
import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn(){
    return (
        <Container>
            <Content>
                <Brand size='2' subtitle />
                <h2>Faça seu login</h2>
                <Form>
                    <Input type='text' placeholder='E-mail' icon={FiMail} />
                    <Input type='password' placeholder='Senha' icon={FiLock} />
                    <Button title="Entrar" />
                </Form>
                <ButtonText title='Criar Conta' to='/register' />           
            </Content>
            <Background />           
        </Container>
    )
}