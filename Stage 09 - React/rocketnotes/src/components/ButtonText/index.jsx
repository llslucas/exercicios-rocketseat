import { Container } from "./styles";

export function ButtonText({tittle, ...rest}){
    return(
        <Container type='button' { ...rest }>
            {tittle}
        </Container>
    )
}