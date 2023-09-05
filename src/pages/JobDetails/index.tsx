import { Container } from "./styles";
import { useAppSelector } from "../../redux/hooks";

function JobDetails() {
    const { selectedJob } = useAppSelector(state => state.jobsData);

    console.log("selectedJob:", selectedJob);

    return (
        <Container>
            <div>
                <h2>
                    The most complete job portal!
                </h2>
                <h3>Here you can find your perfect job match without any hassle.</h3>
            </div>
            <div>
                AQUI
            </div>
        </Container>
    )
}

export default JobDetails;
