import { Container } from "./styles";

export function Brand({ size=1, subtitle=false }){
    return (
        <Container $size={size.toString()} >
            <h1>RocketMovies</h1>
            {subtitle && <h2>Aplicação para acompanhar tudo que assistir.</h2>}
        </Container>
    )
}