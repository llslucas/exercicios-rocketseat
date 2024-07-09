import { api } from "../../services/api";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, DataContainer, ProfileHeader, Form, AvatarContainer, InputGroup } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera} from 'react-icons/fi'
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { ButtonIcon } from "../../components/ButtonIcon";

export function Profile(){
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail]  = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    const navigate = useNavigate();

    async function handleUpdate(){
        const updated = {
            name,
            email,
            old_password: passwordOld,
            password: passwordNew
        }

        const userUpdated = Object.assign(user, updated);       

        await updateProfile({ user: userUpdated, avatarFile });        
    }

    async function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <ProfileHeader>
                <ButtonIcon 
                    icon={FiArrowLeft} 
                    onClick={e => navigate(-1)} 
                />
            </ProfileHeader>

            <AvatarContainer>
                <img src={ avatar }/>

                <label htmlFor="avatar">
                    <FiCamera />
                </label>

                <input 
                    id="avatar" 
                    type="file" 
                    onChange={ handleChangeAvatar }
                />                            
            </AvatarContainer>

            <DataContainer>
                <Form>
                    <InputGroup>
                        <Input
                            value={ name } 
                            placeholder="Nome" 
                            icon={FiUser} 
                            type="text" 
                            onChange={e => setName(e.target.value)}
                        /> 
                        
                        <Input 
                            value={ email } 
                            placeholder="Email" 
                            icon={FiMail} 
                            type="text" 
                            onChange={e => setEmail(e.target.value)}
                        /> 
                    </InputGroup>

                    <InputGroup>
                        <Input 
                            placeholder="Senha atual" 
                            icon={FiLock} 
                            type="password" 
                            onChange={e => setPasswordOld(e.target.value)}
                        /> 

                        <Input 
                            placeholder="Nova senha" 
                            icon={FiLock} 
                            type="password" 
                            onChange={e => setPasswordNew(e.target.value)}
                        /> 
                    </InputGroup>

                    <Button 
                        title="Salvar" 
                        onClick={ handleUpdate }
                    />
                </Form>
            </DataContainer>
        </Container>
    )
}