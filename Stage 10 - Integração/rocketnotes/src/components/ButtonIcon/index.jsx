import { Container } from "./styles";

export function ButtonIcon({icon: Icon, size='24px', isActive = false, ...rest}){
    return(
        <Container type='button' $isactive={ isActive.toString() } { ...rest }>
            {Icon && <Icon size={size} />}
        </Container>
    )
}