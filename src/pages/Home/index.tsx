import { BannerImgDiv, BannerTextDiv, Container } from "./styles";
import bannerImg from '../../assets/banner.jpg';
import bannerImgTwo from '../../assets/banner2.jpg';

function Home() {
    return (
        <Container>
            <div>
                <BannerTextDiv>
                    <h2>
                        Get the job <br />
                        of your dreams <br />
                        quickly!
                    </h2>
                    <p>
                        Quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </p>
                </BannerTextDiv>
                <BannerImgDiv>
                    <img src={bannerImg} alt="Get the job of your dreams quickly!" />
                </BannerImgDiv>
            </div>
            <div>
                <BannerImgDiv imgonleft={true}>
                    <img src={bannerImgTwo} alt="Get the job of your dreams quickly!" />
                </BannerImgDiv>
                <BannerTextDiv>
                    <h2>
                        Unlock your <br />
                        potential with <br />
                        quality job. <br />
                    </h2>
                    <p>
                        Quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </p>
                </BannerTextDiv>
            </div>
        </Container>
    )
};

export default Home;