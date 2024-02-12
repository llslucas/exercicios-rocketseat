import { Container, Main, Form, Title, MarkersContainer, InputContainer } from './styles';
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function New(){
    const note = {
        links: [
            {id: 1, name: 'https://www.rocketseat.com.br/'},
            {id: 2, name: 'https://www.google.com.br/'}
        ],
        markers: [
            {id: 1, name: 'React'},
            {id: 2, name: 'NodeJS'},
            {id: 3, name: 'Vite'},
            {id: 4, name: 'RocketSeat'},        
        ]        
    };

    note.addLink = function(name){
        note.links.push({id: note.links.length + 1, name});
    };

    note.addMarker = function(name){
        note.markers.push({id: note.markers.length + 1, name});
    };

    note.removeLink = function(id){
        note.links = note.links.filter(link => link.id != id);   
        this.forceUpdate();  
    };

    note.removeMarker = function(id){
        note.links = note.links.filter(marker => marker.id != id);
    };

    return (               
        <Container>            
            <Header />    
            <Main>
                <Form>
                    <Title>
                        <h1>Criar nota</h1>
                        <a href="/"><ButtonText title="voltar" /></a>
                    </Title>

                    <InputContainer>
                        <Input type="text" placeholder="Título" />                    
                        <TextArea placeholder="Observações" rows="5" />
                    </InputContainer>

                    <Section title="Links úteis">
                        <InputContainer>
                            {note.links.map(link => {
                                return (
                                    <NoteItem key={link.id} value={link.name} />
                                )
                            })}
                            <NoteItem placeholder="Novo Link" isBlank />
                        </InputContainer>
                    </Section> 

                    <Section title="Marcadores">
                        <MarkersContainer>
                            {note.markers.map(marker => {
                                return (
                                    <NoteItem key={marker.id} value={marker.name} />
                                )
                            })}   
                            <NoteItem placeholder="Novo Marcador" isBlank />   
                        </MarkersContainer>
                    </Section>        

                    <Button title="Salvar" />
                </Form>
            </Main>       
        </Container>
    )
};
