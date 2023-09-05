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

        > h2 {
            font-family: "IBM Plex Serif", serif;
            font-size: 20px;
            font-weight: 700;
        }

        > h3 {
            font-family: "IBM Plex Serif", serif;
            font-size: 20px;
            font-weight: 300;
            margin-bottom: 30px;
        }
    }
`;