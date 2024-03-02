import { FiMail , FiLock } from 'react-icons/fi';
import { Container, DataContainer, ImgContainer, Form } from "./styles";
import { Link } from 'react-router-dom';

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn(){
    return (
        <Container>
            <DataContainer>
                <Brand />   
                <Form>  
                    <h2>Faça seu login</h2>                  
                    <Input icon={FiMail} placeholder="E-mail" type="text" />
                    <Input icon={FiLock} placeholder="Senha" type="password" />
                    <Button title="Entrar" />
                </Form>

                <Link to="/register"><ButtonText title="Criar conta" isActive /></Link>
            </DataContainer>

            <ImgContainer />            
        </Container>
    )
}