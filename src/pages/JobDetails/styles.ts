import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;

    > div {
        width: 1120px;
        max-width: 100%;
        margin: 0px auto;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;

        &:first-child {
            justify-content: flex-start;
            flex-direction: column;
            gap: 0px;
        }

        > a {
            font-family: "IBM Plex Serif", serif;
            font-size: 24px;
            font-weight: 700;
            justify-content: center;
            align-items: center;
            text-align: center;
            text-decoration: none;
            background-color: #ed6b5a;
            border: 0px;
            padding: 10px 30px;
            border-radius: 30px;
            color: #fff;
            cursor: pointer;
        }

        h2 {
            font-family: "IBM Plex Serif", serif;
            font-size: 30px;
            font-weight: 700;
        }

        h3 {
            font-family: "IBM Plex Serif", serif;
            font-size: 24px;
            font-weight: 300;
            margin-bottom: 5px;
        }

        p {
            font-family: "IBM Plex Serif", serif;
            font-size: 16px;
            font-weight: 300;
            line-height: 24px;
        }

        ul {
            padding-left: 20px;
            margin-bottom: 10px;
        }
    }
`;

export const HeaderInfos = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    img {
        margin-right: 15px;
        border-radius: 50%;
    }

    a {
        font-family: "IBM Plex Serif", serif;
        font-size: 16px;
        font-weight: 300;
        color: #ed6b5a;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        align-items: flex-start;

        img {
            margin-bottom: 15px;
            margin-right: 0px;
        }
    }
`;