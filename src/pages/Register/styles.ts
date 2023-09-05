import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 15px;

    > div {
        width: 1120px;
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
`;
