import { Container } from "./styles";
import { MdClose, MdAdd } from "react-icons/md"

export function NoteItem({isBlank = false, ...rest }){
    return (
        <Container $isblank={ isBlank.toString() }>            
            <input {...rest} />
            {isBlank ? <MdAdd /> : <MdClose />}
        </Container>
    )
}