import styled from 'styled-components';

interface ImgProps {
    imgonleft?: true | false;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 30px;

    > div {
        width: 1120px;
        max-width: 100%;
        margin: 0px auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        @media (max-width: 992px) {
            flex-direction: column;
        }
    }

    @media (max-width: 992px) {
        padding: 15px;
        gap: 0px;
    }
`;

export const BannerTextDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    gap: 30px;

    h2 {
        font-family: "IBM Plex Serif", serif;
        font-size: 60px;
        color: "#000";
        font-weight: 700;

        @media (max-width: 992px) {
            font-size: 52px;
        }
    }

    p {
        font-family: "IBM Plex Serif", serif;
        font-size: 24px;
        color: "#000";
        font-weight: 300;

        @media (max-width: 992px) {
            font-size: 20px;
        }
    }

    @media (max-width: 992px) {
        width: 100%;
        padding: 15px 0px;
    }
`;

export const BannerImgDiv = styled.div<ImgProps>`
    width: 50%;
    display: flex;

    > img {
        max-width: 100%;
        border-radius: ${({imgonleft}) => imgonleft === true ? "100px 100px 100px 0px" : "100px 100px 0px 100px"};
        padding: ${({imgonleft}) => imgonleft === true ? "0px 30px 0px 0px" : "0px 0px 0px 30px"};
    }

    @media (max-width: 992px) {
        display: none;
    }
`;