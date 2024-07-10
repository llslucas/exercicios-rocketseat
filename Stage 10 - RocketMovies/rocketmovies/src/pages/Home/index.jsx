import { api } from '../../services/api';
import { useEffect, useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { Container, Content, Title, Notes } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MovieNote } from '../../components/MovieNote';
import { Link } from 'react-router-dom';

export function Home(){    
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchMovies(){
            const response = await api.get(`/movieNotes?title=${search}`);
            setMovies(response.data);
        }

        fetchMovies(search);
    }, [search]);

    return (
        <Container>
            <Header onChange={ e => setSearch(e.target.value) } />
            <Content>
                <Title>
                    <h1>Meus filmes</h1>
                    <Link to="/create">
                        <Button title='Adicionar filme' icon={FiPlus} />
                    </Link>
                </Title>
                <Notes>
                    {                        
                        movies.map(movie => {                            
                            return (
                                <MovieNote key={movie.id} movie={movie} />                        
                            )
                        })
                    }
                </Notes>
            </Content>
        </Container>
    )
}