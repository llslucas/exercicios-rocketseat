import { Container, Tags, Tag } from "./styles";
import { Stars } from '../Stars';


export function MovieNote({note}){
    return(
        <Container>
            <div>
                <h1>
                    {note.title}
                </h1>
                <Stars rating={note.rating} size='1.4rem' />
            </div>
            <p>{note.description}</p>     
            <Tags>
                {note.tags.map(tag => {
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