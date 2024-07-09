import { useState } from 'react';

import { FiMail , FiLock } from 'react-icons/fi';
import { Container, DataContainer, ImgContainer, Form } from "./styles";
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();    

    function handleSignIn(){
        signIn({ email, password });
    }

    return (
        <Container>
            <DataContainer>
                <Brand />   
                <Form>  
                    <h2>Faça seu login</h2>                  
                    <Input icon={FiMail} placeholder="E-mail" type="text" onChange={e => setEmail(e.target.value)} autoComplete="email" />
                    <Input icon={FiLock} placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} autoComplete="password" />
                    <Button title="Entrar" onClick={ handleSignIn } />
                </Form>

                <Link to="/register"><ButtonText title="Criar conta" isActive /></Link>
            </DataContainer>

            <ImgContainer />            
        </Container>
    )
}