import styled from 'styled-components';

export const Container = styled.div`
    background: #0c2c48;
    padding: 30px;

    footer {
        width: 1120px;
        max-width: 100%;
        margin: 0px auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        nav {
            a {
                font-family: "IBM Plex Serif", serif;
                color: #fff;
                text-decoration: none;
                font-size: 18px;
                transition: color 0.4s;
                font-weight: 700;

                & + a {
                    margin-left: 16px;
                }

                &:hover {
                    color: #ed6b5a;
                }
            }

            @media (max-width: 992px) {
                order: 0;
            }
        }

        div {

            p {
                font-family: "IBM Plex Serif", serif;
                font-weight: 300;
                text-align: center;
                color: #fff;
            }

            @media (max-width: 992px) {
                order: 1;
            }
        }

        @media (max-width: 992px) {
            flex-direction: column;
            gap: 32px;
        }
    }

    @media (max-width: 992px) {
        padding: 30px 15px;
    }
`;