import styled from 'styled-components';

interface MenuMobileProps {
    hide: boolean;
}

export const Container = styled.div`
    background: #fbfbfb;
    padding: 30px;

    header {
        width: 1120px;
        max-width: 100%;
        margin: 0px auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > nav, div > nav {
            a {
                font-family: "IBM Plex Serif", serif;
                color: #000;
                text-decoration: none;
                font-size: 18px;
                transition: color 0.4s;
                font-weight: 700;

                & + a {
                    margin-left: 32px;

                    @media (max-width: 992px) {
                        margin-left: 0px;
                    }
                }

                button {
                    padding: 10px 30px;
                    border: 0px;
                    border-radius: 20px;
                    background-color: #ed6b5a;
                    font-family: inherit;
                    color: #fff;
                    font-size: inherit;
                    transition: background-color 0.4s;
                    font-weight: inherit;

                    &:hover {
                        background-color: #0c2c48;
                    }
                }

                &:hover {
                    color: #ed6b5a;
                }
            }

            @media (max-width: 992px) {
                display: none;
            }
        }

        div > nav {
            @media (max-width: 992px) {
                width: 100%;
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 5vh;
            }
        }
    }

    @media (max-width: 992px) {
        padding: 30px 15px;
    }
`;

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-family: "Lily Script One", cursive;
        color: #0c2c48;
        margin-left: 10px;
    }
`

export const UserLoggedMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    strong {
        font-family: "IBM Plex Serif", serif;
        font-size: 18px;
        font-weight: 300;
    }

    @media (max-width: 992px) {
        /* position: absolute; */
        margin-left: 15px;
    }
`;

export const MobileButton = styled.div`
    display: none;
    align-items: center;
    justify-content: center;

    > button {
        justify-content: center;
        align-items: center;
        background-color: #ed6b5a;
        border: 0px;
        width: 50px;
        height: 50px;
        padding-top: 3px;
        border-radius: 50px;
        color: #fff;
        cursor: pointer;
        position: relative;
        z-index: 7;
    }

    @media (max-width: 992px) {
        display: flex;
    }
`;

export const CloseBtn = styled.div`
    display: none;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;

    @media (max-width: 992px) {
        display: flex;
    }
`;

export const MobileMenu = styled.div<MenuMobileProps>`
    display: none;
    position: fixed;
    z-index: 8;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    transition: right 0.4s;

    @media (max-width: 992px) {
        display: flex;
        right: ${({hide}) => (hide ? "-101vw" : "0")}
    }
`