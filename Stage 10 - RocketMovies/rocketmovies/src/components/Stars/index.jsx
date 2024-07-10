import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md'

import { Container } from './styles'

export function Stars({rating, size='1.4rem'}){
    return (
        <Container $size={size.toString()}>
            {Array.from({length: 5}, (v, k) => k + 1).map(pos => {
                if(pos <= rating){
                    return(<MdOutlineStar key={pos} />)
                }else{
                    return(<MdOutlineStarBorder key={pos} />)
                }
            })}
        </Container>
    )
}