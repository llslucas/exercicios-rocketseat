import { Container } from "./styles";


export function ButtonText({title, to, icon: Icon, ...rest}){
    return (
        <Container to={to}>
            {Icon && <Icon />}
            {title}
        </Container>
    )
}