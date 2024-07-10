import { Container } from "./styles";

export function Button({title, icon: Icon, inverted = false, ...rest}){
    return (
        <Container type="button" $inverted={inverted} {...rest}>
            {Icon && <Icon />}
            {title}
        </Container>
    )
}