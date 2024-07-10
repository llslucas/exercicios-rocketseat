import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Container, Header, Content, Group, Avatar } from './styles';

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Profile(){
    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);    

    async function handleUpdate(){
        const updated = {
            name,
            email,
            oldPassword,
            password: newPassword
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
            <Header>
                <ButtonText title='Voltar' icon={FiArrowLeft} to="/" />
            </Header>

            <Avatar>
                <img src={ avatar } alt={ user.name } />
                <label htmlFor='fileInput'>
                    <FiCamera />
                </label>
                <input 
                    type='file' 
                    id='fileInput' 
                    onChange={ handleChangeAvatar }
                />
            </Avatar>

            <Content>
                <Group>
                    <Input 
                        type='text' 
                        icon={FiUser} 
                        placeholder="Nome Completo" 
                        value={ name }
                        onChange={e => setName(e.target.value)}
                    />

                    <Input 
                        type='text' 
                        icon={FiMail} 
                        placeholder="Endereço de e-mail" 
                        value={ email }
                        onChange={e => setEmail(e.target.value)}
                    />
                </Group>

                <Group>
                    <Input 
                        type='password' 
                        icon={FiLock} 
                        placeholder="Senha atual"     
                        value={ oldPassword }                    
                        onChange={e => setOldPassword(e.target.value)}
                    />
                    <Input 
                        type='password' 
                        icon={FiLock} 
                        placeholder="Nova senha" 
                        value={ newPassword }
                        onChange={e => setNewPassword(e.target.value)}
                    />
                </Group>
                <Button 
                    title="Salvar" 
                    onClick={ e => handleUpdate(e) }
                />
            </Content>
        </Container>
    );
};