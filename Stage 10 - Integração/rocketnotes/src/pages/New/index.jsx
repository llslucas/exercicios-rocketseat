import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { Container, Main, Form, Title, TagsContainer, InputContainer } from './styles';
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function New(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddLink(){      
        const formattedLink = newLink.trim();
        
        if(formattedLink === ""){
            alert("Você não pode adicionar um link em branco.");
            setNewLink("");
            return;
        }

        if(links.find(link => link === formattedLink)){
            alert("O link já foi adicionado.");
            setNewLink("");
            return;
        }

        setLinks(prevState => [...prevState, formattedLink]);
        setNewLink("");
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }

    function handleAddTag(){      
        const formattedTag = newTag.trim();
        
        if(formattedTag === ""){
            alert("Você não pode adicionar um marcador em branco.");
            setNewTag("");
            return;
        }

        if(tags.find(tag => tag === formattedTag)){
            alert("O marcador já foi adicionado.");
            setNewTag("");
            return;
        }

        setTags(prevState => [...prevState, formattedTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(link => link !== deleted));
    }

    async function handleSaveNote(){
        const formattedTitle = title.trim();
        const formattedDescription = description.trim();       
        
        if(!formattedTitle || formattedTitle === ""){
            return alert("Informe o título.");
        }
        
        await api.post("/notes", {
            title: formattedTitle,
            description: formattedDescription,
            tags,
            links
        });

        alert("Nota criada com sucesso!");

        navigate(-1);
    }

    return (               
        <Container>            
            <Header />    
            <Main>
                <Form>
                    <Title>
                        <h1>Criar nota</h1>
                        <ButtonText 
                            title="voltar"
                            onClick={e => navigate(-1) }
                        />
                    </Title>

                    <InputContainer>

                        <Input                             
                            type="text" 
                            placeholder="Título" 
                            onChange = {e => setTitle(e.target.value)}
                        />    

                        <TextArea 
                            placeholder="Observações" 
                            rows="5" 
                            onChange = {e => setDescription(e.target.value)}
                        />
                    </InputContainer>

                    <Section title="Links úteis">
                        <InputContainer>
                            {links.map((link, index) => {
                                return (
                                    <NoteItem 
                                        key={String(index)} 
                                        value={link} 
                                        onClick= {() => handleRemoveLink(link) }
                                    />
                                )
                            })}

                            <NoteItem 
                                placeholder="Novo Link" 
                                isBlank 
                                value= { newLink }
                                onChange= { e => setNewLink(e.target.value) }
                                onClick= { handleAddLink }
                            />
                        </InputContainer>
                    </Section> 

                    <Section title="Marcadores">
                        <TagsContainer>
                            {tags.map((tag, index) => {
                                return (
                                    <NoteItem 
                                        key = {String(index)} 
                                        value = {tag} 
                                        onClick = { () => handleRemoveTag(tag) }
                                    />
                                )
                            })}   
                            <NoteItem 
                                value = { newTag }
                                placeholder = "Novo Marcador" 
                                isBlank 
                                onChange = {e => setNewTag(e.target.value)}
                                onClick = { handleAddTag }
                            />   
                        </TagsContainer>
                    </Section>        

                    <Button 
                        title="Salvar" 
                        onClick = { handleSaveNote }
                    />
                </Form>
            </Main>       
        </Container>
    )
};
