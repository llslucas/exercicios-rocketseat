import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { MdAdd } from 'react-icons/md'

export function Home(){
    return (
        <Container>
            <Brand>
                <h2>Rocketnotes</h2>
            </Brand>

            <Header />

            <Menu>

            </Menu>

            <Search>

            </Search>            

            <NewNote>                
                <MdAdd />
                Criar Nota
            </NewNote>   

            <Content>
                
            </Content>  
        </Container>
    )
}