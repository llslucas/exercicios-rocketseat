import { FiUser, FiMail , FiLock } from 'react-icons/fi';
import { Container, DataContainer, ImgContainer, Form } from "./styles";
import { Link } from 'react-router-dom';

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp(){
    return (
        <Container>
            <ImgContainer />  
            <DataContainer>
                <Brand />   
                <Form>  
                    <h2>Crie sua conta</h2>          
                    <Input icon={FiUser} placeholder="Nome" type="text" />        
                    <Input icon={FiMail} placeholder="E-mail" type="text" />
                    <Input icon={FiLock} placeholder="Senha" type="password" />
                    <Button title="Cadastrar" />
                </Form>

                <Link to="/"><ButtonText title="Voltar para o login" isActive /></Link>
            </DataContainer>

                      
        </Container>
    )
}