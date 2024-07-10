import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background, Form } from './styles';
import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    async function handleSignIn(){
        await signIn({ email, password});
    }

    return (
        <Container>
            <Content>
                <Brand size='2' subtitle />
                <h2>Faça seu login</h2>
                <Form>
                    <Input 
                        type='text' 
                        placeholder='E-mail' 
                        icon={FiMail} 
                        onChange={ e => setEmail(e.target.value) }
                    />
                    <Input 
                        type='password' 
                        placeholder='Senha' 
                        icon={FiLock} 
                        onChange={ e => setPassword(e.target.value) }
                    />
                    <Button 
                        title="Entrar" 
                        onClick={ handleSignIn }
                    />
                </Form>
                <ButtonText title='Criar Conta' to='/register' />           
            </Content>
            <Background />           
        </Container>
    )
}