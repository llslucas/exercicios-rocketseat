import { Container, Main, Form, Title, MarkersContainer, InputContainer } from './styles';
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function New(){
    const links = [
        {id: 1, name: 'https://www.rocketseat.com.br/'},
        {id: 2, name: 'https://www.google.com.br/'}
    ];

    const markers = [
        {id: 1, name: 'React'},
        {id: 2, name: 'NodeJS'},
        {id: 3, name: 'Vite'},
        {id: 4, name: 'RocketSeat'},        
    ];

    return (               
        <Container>            
            <Header />    
            <Main>
                <Form>
                    <Title>
                        <h1>Criar nota</h1>
                        <ButtonText title="voltar" />
                    </Title>

                    <InputContainer>
                        <Input type="text" placeholder="Título" />                    
                        <TextArea placeholder="Observações" rows="5" />
                    </InputContainer>

                    <Section title="Links úteis">
                        <InputContainer>
                            {links.map(link => {
                                return (
                                    <NoteItem key={link.id} value={link.name} readOnly/>
                                )
                            })}
                            <NoteItem placeholder="Novo Link" isBlank />
                        </InputContainer>
                    </Section> 

                    <Section title="Marcadores">
                        <MarkersContainer>
                            {markers.map(marker => {
                                return (
                                    <NoteItem key={marker.id} value={marker.name} readOnly />
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
