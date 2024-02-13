import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Col2, Markers } from "./style";

import { Header } from '../../components/Header'
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Marker } from '../../components/Marker';

export function CreateMovie(){
    return(
        <Container>
            <Header />
            <Content>
                <ButtonText title="Voltar" to="/" icon={FiArrowLeft} />
                <h1>Novo filme</h1>
                <Col2>
                    <Input type="text" placeholder="Título" />
                    <Input type="text" placeholder="Sua nota (0 a 5)" />
                </Col2>
                <TextArea placeholder='Observações' />
                <h2>Marcadores</h2>
                <Markers>
                    <Marker value="React" readOnly />
                    <Marker placeholder="Novo marcador" isNew />
                </Markers>
                <Col2>
                    <Button title="Excluir Filme" inverted />
                    <Button title="Salvar alterações" />
                </Col2>
            </Content>
        </Container>
    )
}