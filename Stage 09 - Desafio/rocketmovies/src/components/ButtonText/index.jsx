import { Container } from "./styles";


export function ButtonText({title, to, ...rest}){
    return (
        <Container to={to}>
            {title}
        </Container>
    )
}