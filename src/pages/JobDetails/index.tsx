import { Container, HeaderInfos } from "./styles";
import { useAppSelector } from "../../redux/hooks";
import parse from "html-react-parser";
import { formatDate } from "../../utils/formatDate";
import { Link } from "react-router-dom";

function JobDetails() {
    const { selectedJob } = useAppSelector(state => state.jobsData);

    console.log("selectedJob:", selectedJob);

    return (
        <Container>
            {selectedJob && selectedJob !== null && (
                <div>
                    <HeaderInfos>
                        <div>
                            <img style={{ width: "150px" }} src={selectedJob.company.logo} alt={selectedJob.company.name} />
                        </div>
                        <div>
                            <p>{formatDate(selectedJob.from_date)} by <Link to={selectedJob.company.website}><strong>{selectedJob.company.name}</strong></Link></p>
                            <h2>
                                {selectedJob.title}
                            </h2>
                            <h3>{selectedJob.function} / {selectedJob.experience} / {selectedJob.employment_type}</h3>
                            <p>Location: {selectedJob.locations[0].location.text}</p>
                            <p>Owner: {selectedJob.contact.name}</p>
                            <p>Email: {selectedJob.contact.email}</p>
                        </div>
                    </HeaderInfos>
                    <p>{parse(selectedJob.company.descr)}</p>
                    <br />
                    <br />
                    <br />
                    <p>{parse(selectedJob.descr)}</p>
                    <br />
                    <br />
                    <br />
                    <p>{parse(selectedJob.skills)}</p>
                    <br />
                    <br />
                    <br />
                    <Link target="blank" to={selectedJob.urls.ad}>
                        Apply Now
                    </Link>
                </div>
            )}
        </Container>
    )
}

export default JobDetails;
