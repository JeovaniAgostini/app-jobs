import { SignIn } from "@clerk/clerk-react";
import { Container } from "./styles";

function Login() {
    return (
        <Container>
            <div>
                <SignIn afterSignInUrl={"/jobs"} />
            </div>
        </Container>
    )
}

export default Login;
