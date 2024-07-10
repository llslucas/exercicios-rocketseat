import { api } from '../../services/api';
import { useState } from 'react';

import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Container, Content, Background, Form } from './styles';
import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignUp(){
        if(!name){
            return alert("Preencha o nome!");
        }

        if(!email){
            return alert("Preencha o Email!");
        }

        if(!password){
            return alert("Preencha a Senha!");
        }

        try{
            await api.post("/users", { name, email, password });                
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                console.log(error)
                alert("Não foi possível cadastrar o usuário.");
            }
        }  
    }

    return (    
        <Container>
            <Content>
                <Brand size='2' subtitle />
                <h2>Crie sua conta</h2>
                <Form>
                    <Input 
                        type='text' 
                        placeholder='Nome' 
                        icon={FiUser} 
                        onChange={e => setName(e.target.value)}
                    />

                    <Input 
                        type='text' 
                        placeholder='E-mail' 
                        icon={FiMail} 
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input 
                        type='password' 
                        placeholder='Senha' 
                        icon={FiLock} 
                        autoComplete="new-password" 
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button 
                        title="Cadastrar" 
                        onClick={handleSignUp}
                    />
                </Form>
                <ButtonText title='Voltar para o login' to='/' icon={FiArrowLeft} />
            </Content>
            <Background />           
        </Container>
    )
}