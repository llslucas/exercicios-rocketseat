import { Container } from "./styles";
import { MdClose, MdAdd } from "react-icons/md"

export function NoteItem({isBlank = false, value, onClick, ...rest }){
    return (
        <Container $isblank={ isBlank.toString() }>            
            <input type="text" value = {value} readOnly={!isBlank} {...rest} />
            <button onClick={onClick}>
                {isBlank ? <MdAdd /> : <MdClose />}
            </button>
        </Container>
    )
}