import { Container } from "./styles";

export function TextArea({...rest}){
    return (
        <Container>           
            <textarea {...rest}></textarea>
        </Container>           
    )
}