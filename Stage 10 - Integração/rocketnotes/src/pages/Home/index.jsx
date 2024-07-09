import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { MdAdd, MdSearch } from 'react-icons/md'

export function Home(){
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [search, setSearch] = useState([]);
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    function handleTagSelection(tagName) {
        const alreadySelected = selectedTags.includes(tagName);
        if(alreadySelected){
            setSelectedTags(selectedTags.filter(tag => tag !== tagName));
            return;            
        }

        setSelectedTags(prevState => [...prevState, tagName]);
    }

    function handleNoteDetails(noteId){
        navigate(`/details/${noteId}`);
    }
    
    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);            
        }

        fetchTags();  
    }, []);

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`);
            setNotes(response.data);
        }

        fetchNotes();
    }, [selectedTags, search]);

    return (
        <Container>
            <Brand>
                <h2>Rocketnotes</h2>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText 
                        title="Todos" 
                        isActive={selectedTags.length === 0}
                        onClick = {() => {setSelectedTags([])}}
                    />
                </li>
                {                
                    tags.map(tag => {   
                        return(                   
                            <li key={String(tag.id)}>
                                <ButtonText                                 
                                    title={tag.name} 
                                    isActive = {selectedTags.includes(tag.name)}
                                    onClick = {() => { handleTagSelection(tag.name)}}
                                />
                            </li>
                        )
                    })
                }   
            </Menu>

            <Search>
                <Input 
                    placeholder = "Pesquisar pelo titulo" 
                    icon={MdSearch} 
                    onChange={e => {setSearch(e.target.value)}}
                />
            </Search>            

            
            <NewNote to="/new">                
                <MdAdd />
                Criar Nota
            </NewNote>   
            

            <Content>
                <Section title="Minhas Notas">
                   {
                    notes.map(note => {
                        return(
                            <Note 
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleNoteDetails(note.id)}
                            />
                        )
                    })
                   }
                    
                </Section>
            </Content>  
        </Container>
    )
}