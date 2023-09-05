import { Container, JCDiv, JobCard, NoResults, LoadingDiv, Spinner } from "./styles";
import { BookmarkSimple } from "@phosphor-icons/react";
import { useEffect } from "react";
import { callGetAllJobs, searchById } from "../../redux/jobsSlice";
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

function Jobs() {
    const dispatch = useAppDispatch();
    const { loading, error, jobsList } = useAppSelector(state => state.jobsData)

    useEffect(() => {
        dispatch(callGetAllJobs())
    }, [])

    const saveSelected = (number: Number) => {
        dispatch(searchById(number))
    }

    if (loading) {
        return (
            <Container>
                <LoadingDiv>
                    <Spinner />
                </LoadingDiv>
            </Container>
        )
    }

    if (error) {
        return (
            <Container>
                <div>
                    <NoResults>
                        <p>No results were found Lorem ispsum dolor sit amet consectetur adispiscing elit.</p>
                        {/* result beeing fetched, loading */}
                        <p>Reload the page or try again later!</p>
                        <Link to="/jobs">Reload</Link>
                    </NoResults>
                </div>
            </Container>
        )
    }

    return (
        <Container>
            <div>
                <h2>
                    The most complete job portal!
                </h2>
                <h3>Here you can find your perfect job match without any hassle.</h3>
            </div>
            <div>
                {
                    jobsList && jobsList.length > 0 &&
                    jobsList.map((job: any) => {
                        return (
                            <JobCard>
                                <JCDiv alignitems="center">
                                    <img src={job.company.logo} alt={job.company.name} />{job.company.name}
                                    <BookmarkSimple size={24} />
                                </JCDiv>
                                <JCDiv direction="column">
                                    <span>{job.employment_type}</span>
                                    <p>Posted: {formatDate(job.from_date)}</p>
                                    <h4>{job.title}</h4>
                                    <p>{job.experience} / {job.function}</p>
                                </JCDiv>
                                <JCDiv alignitems="center">
                                    <address>{job.locations[0].location.text}</address>
                                    <Link onClick={() => saveSelected(job.id)} to={`details/` + job.slug + '/' + job.id}>
                                        <button>Details</button>
                                    </Link>
                                </JCDiv>
                            </JobCard>
                        )
                    })
                }
            </div>
        </Container>
    )
};

export default Jobs;