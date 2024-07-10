import { api } from '../../services/api';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Col2, Markers } from "./style";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Marker } from '../../components/Marker';

export function CreateMovie(){
    const [title, setTitle] = useState();
    const [rating, setRating] = useState();
    const [description, setDescription] = useState();

    const [newTag, setNewTag] = useState('');
    const [tags, setTags] = useState([]);

    const navigate = useNavigate();

    function handleNewTag(){
        const tagArrumada = newTag.trim();

        if(tagArrumada === ''){
            return alert("Não é possível inserir uma tag vazia.");
        }

        if(tags.includes(tagArrumada)){
            return alert("A tag já foi inserida.");
        }        

        setTags(prevState => [...prevState, tagArrumada]);
        setNewTag('');
    }

    function handleRemoveTag(tagToRemove){
        setTags(tags.filter(tag => tag !== tagToRemove));
    }

    function handleCreateMovie(){
        if(!title || !rating || !description){
            return alert("Preencha todos os campos!");
        }

        try{
            api.post("/movieNotes", { title, description, rating, tags });
            alert("Filme cadastrado com sucesso!");
        }catch(error){
            alert("Ocorreu um erro no cadastro do filme.");
            console.log(error);
        }

        navigate(-1);
    }

    return(
        <Container>
            <Header />
            <Content>
                <ButtonText title="Voltar" to="/" icon={FiArrowLeft} />
                <h1>Novo filme</h1>
                <Col2>
                    <Input type="text" placeholder="Título" onChange={e => setTitle(e.target.value)} />
                    <Input type="text" placeholder="Sua nota (0 a 5)" onChange={e => setRating(e.target.value)} />
                </Col2>
                <TextArea placeholder='Observações' onChange={e => setDescription(e.target.value)} />
                <h2>Marcadores</h2>
                <Markers>
                    {
                        tags &&
                        tags.map((tag, index) => (
                            <Marker 
                                readOnly
                                key={index}
                                value={tag} 
                                onClick={ () => {handleRemoveTag(tag)} }
                            />
                        ))
                    }
                    <Marker 
                        isNew 
                        placeholder="Novo marcador" 
                        value = { newTag }
                        onChange={ e => setNewTag(e.target.value) }
                        onClick={ handleNewTag }
                    />
                </Markers>
                <Col2>
                    <Button title="Excluir Filme" inverted />
                    <Button 
                        title="Salvar alterações"
                        onClick={ handleCreateMovie }
                    />
                </Col2>
            </Content>
        </Container>
    )
}