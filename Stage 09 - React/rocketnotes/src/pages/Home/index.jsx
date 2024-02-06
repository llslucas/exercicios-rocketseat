import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { MdAdd, MdSearch } from 'react-icons/md'

export function Home(){
    return (
        <Container>
            <Brand>
                <h2>Rocketnotes</h2>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos" isActive /></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="Node" /></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={MdSearch} />
            </Search>            

            <NewNote>                
                <MdAdd />
                Criar Nota
            </NewNote>   

            <Content>
                <Section title="Minhas Notas">
                    
                </Section>
            </Content>  
        </Container>
    )
}