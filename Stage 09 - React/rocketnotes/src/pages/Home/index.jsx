import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { MdAdd, MdSearch } from 'react-icons/md'

export function Home(){
    const notas = [
        {
            id: 0,
            title: 'React Modal',
            tags: [
                {id: 1, name: 'React'},
                {id: 2, name: 'Vite'}
            ]
        },
        {
            id: 1,
            title: 'Exemplo de Middleware',
            tags: [
                {id: 1, name: 'express'},
                {id: 2, name: 'nodejs'}
            ]
        }
    ]

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
                <a href="/new">Criar Nota</a>
            </NewNote>   

            <Content>
                <Section title="Minhas Notas">
                    {
                        notas.map(nota => {
                            return (
                                <Note data={nota} key={nota.id} />
                            )
                        })
                    }
                    
                </Section>
            </Content>  
        </Container>
    )
}