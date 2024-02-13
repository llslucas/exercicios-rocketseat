import { FiX, FiPlus } from 'react-icons/fi'
import { Container } from './styles';

export function Marker({isNew=false, onClick, ...rest}){
    return (
        <Container $isnew={isNew} >
            <input {...rest} />
            <button onClick={onClick}>{!isNew ? <FiX /> : <FiPlus />}</button>
        </Container>
    )
}