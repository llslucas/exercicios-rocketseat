import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock } from 'react-icons/fi';

import { Author, Container, Content, TimeStamp, Title, Tags, Tag, Text} from "./styles";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Stars } from '../../components/Stars';

export function Preview(){
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const { user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function getCreationTime(){
        const creationTime = new Date(movie.created_at);        
        const fullDate = Intl.DateTimeFormat('pt-BR').format(creationTime);
        return `${fullDate} ${creationTime.getHours()}:${creationTime.getMinutes()} ` ;
    }

    useEffect(() => {
        async function fetchMovie(){
            const response = await api.get(`/movieNotes/${id}`);
            setMovie(response.data);
            console.log(response.data);
        }
        
        fetchMovie();
    }, []);

    return(
        <Container>
            <Header />
            {
            movie &&
            <Content>                      
                <Title>
                    <ButtonText title='Voltar' icon={FiArrowLeft} to='/' />
                    <div>
                        <h1>{ movie.title } </h1>
                        <Stars rating={ movie.rating } size='2rem' />
                    </div>
                    <div>
                        <Author>
                            <img src={ avatarUrl } alt="" />
                            Por { user.name }
                        </Author>
                        <TimeStamp>
                            <FiClock />
                            { getCreationTime() }
                        </TimeStamp>
                    </div>
                </Title>

                <Tags>                    
                    {
                        movie.tags.map(tag => (
                            <Tag key={ tag.id }>
                                { tag.name }
                            </Tag>
                        ))
                    }
                </Tags>

                <Text>
                    {movie.description}                  
                </Text>
            </Content>
            }
        </Container>
    )
}