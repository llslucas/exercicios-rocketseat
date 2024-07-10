import { useNavigate } from "react-router-dom";

import { Container, Tags, Tag } from "./styles";
import { Stars } from '../Stars';

export function MovieNote({movie}){
    const navigate = useNavigate();

    function handleClick(){      
        navigate(`/preview/${movie.id}`);
    }

    return(
        <Container onClick={handleClick}>
            <div>
                <h1>
                    {movie.title}
                </h1>
                <Stars rating={movie.rating} size='1.4rem' />
            </div>
            <p>{movie.description}</p>     
            <Tags>
                {movie.noteTags.map(tag => {
                    return(
                        <Tag key={tag.id}> 
                            {tag.name} 
                        </Tag>
                    )
                })}
            </Tags>
        </Container>
    )
}