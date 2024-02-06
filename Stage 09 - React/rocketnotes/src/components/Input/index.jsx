import { Container } from "./styles";

export function Input({title}){
    return (
        <Container type="text" placeholder={title} />           
    )
}