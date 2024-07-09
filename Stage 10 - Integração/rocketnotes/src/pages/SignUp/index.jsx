import { useState } from 'react';

import { FiUser, FiMail , FiLock } from 'react-icons/fi';
import { Container, DataContainer, ImgContainer, Form } from "./styles";
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos");
        }

        try{
            await api.post("/users", { name, email, password });                
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível cadastrar o usuário.");
            }
        }        
    }

    return (
        <Container>
            <ImgContainer />  
            <DataContainer>
                <Brand />   
                <Form> 
                    <h2>Crie sua conta</h2>          
                    <Input icon={FiUser} placeholder="Nome" type="text" onChange={e => setName(e.target.value)} />        
                    <Input icon={FiMail} placeholder="E-mail" type="text" onChange={e => setEmail(e.target.value)} />
                    <Input icon={FiLock} placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} autoComplete="new-password" />
                    <Button title="Cadastrar" onClick={handleSignUp} />
                </Form>

                <Link to="/"><ButtonText title="Voltar para o login" isActive /></Link>
            </DataContainer>

                      
        </Container>
    )
}