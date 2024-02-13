import { Container } from "./styles";

export function Brand({ size=1, subtitle=false }){
    return (
        <Container $size={size.toString()} $subtitle={subtitle.toString()}>
            <h1>RocketMovies</h1>
            <h2>Aplicação para acompanhar tudo que assistir.</h2>
        </Container>
    )
}