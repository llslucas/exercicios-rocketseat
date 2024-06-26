import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Brand({ size=1, subtitle=false }){
    return (
        <Container $size={size.toString()} >
            <h1>
                <Link to='/'>
                    RocketMovies
                </Link>
            </h1>
            {subtitle && <h2>Aplicação para acompanhar tudo que assistir.</h2>}
        </Container>
    )
}