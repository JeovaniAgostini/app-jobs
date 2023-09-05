import { SignUp } from "@clerk/clerk-react";
import { Container } from "./styles";

function Register() {
    return (
        <Container>
            <div>
                <SignUp afterSignUpUrl={"/jobs"} />
            </div>
        </Container>
    )
}

export default Register;
