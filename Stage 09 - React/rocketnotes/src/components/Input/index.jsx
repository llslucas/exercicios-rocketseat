import { Container } from "./styles";

export function Input({icon: Icon, ...rest}){
    return (
        <Container>
            {Icon && <Icon size={'20px'} />}
            <input {...rest} />
        </Container>           
    )
}