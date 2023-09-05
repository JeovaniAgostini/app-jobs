import styled from 'styled-components';

export const Container = styled.div`
    min-height: calc(100vh - 207px);
    display: flex;
    flex-direction: column;
    padding: 100px 15px;
    justify-content: center;
    text-align: center;

    > div {
        width: 1120px;
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;

        > h2 {
            font-family: "IBM Plex Serif", serif;
            font-size: 20px;
            font-weight: 700;
        }

        a {
            font-family: "IBM Plex Serif", serif;
            background-color: #0c2c48;
            color: #fff;
            padding: 10px 30px;
            border-radius: 20px;
            text-decoration: none;
            font-size: 18px;
            transition: background-color 0.4s;
            font-weight: 700;
            margin-top: 20px;
        }
    }
`;
