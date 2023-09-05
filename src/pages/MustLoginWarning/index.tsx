import { Container } from "./styles";
import { Link } from "react-router-dom";

function MustLoginWarning() {
    return (
        <Container>
            <div>
                <h2>
                    You must login to access opportunity details!
                </h2>
            </div>
            <div>
                <Link to="/login">
                    LOGIN
                </Link>
            </div>
        </Container>
    )
}

export default MustLoginWarning;
