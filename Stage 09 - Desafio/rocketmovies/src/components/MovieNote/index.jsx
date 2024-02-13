import { Container, Stars, Tags, Tag } from "./styles";
import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md'

export function MovieNote({note}){
    return(
        <Container>
            <div>
                <h1>
                    {note.title}
                </h1>
                <Stars>
                    {Array.from({length: 5}, (v, k) => k + 1).map(pos => {
                        if(pos <= note.rating){
                            return(<MdOutlineStar key={pos} />)
                        }else{
                            return(<MdOutlineStarBorder key={pos} />)
                        }
                    })}
                </Stars>
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