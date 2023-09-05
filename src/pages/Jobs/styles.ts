import React from 'react';
import styled from 'styled-components';

interface JCDivProps {
    direction?: "column" | "row";
    alignitems?: React.CSSProperties['alignItems']
}

export const Container = styled.div`
    min-height: calc(100vh - 207px);
    display: flex;
    flex-direction: column;
    padding: 30px;
    justify-content: center;

    @media (max-width: 992px) {
        padding: 30px 15px;
    }

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

export const LoadingDiv = styled.div`
    align-items: center;
`;

export const Spinner = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite;

    &:before , &:after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #ed6b5a;
        animation: prixClipFix 2s linear infinite ;
    }

    &:after{
        border-color: #0c2c48;
        animation: prixClipFix 2s linear infinite , rotate 0.5s linear infinite reverse;
        inset: 6px;
    }

    @keyframes rotate {
        0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
    }

    @keyframes prixClipFix {
        0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
        25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
        50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
        75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
        100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }
`;

export const JobCard = styled.div`
    width: calc(25% - 15px);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: #fbfbfb;
    box-shadow: 1px 1px 0px #f3f3f3;
    border-radius: 15px;
    padding: 15px;
    gap: 20px;

    @media (max-width: 992px) {
        width: calc(50% - 15px);
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const JCDiv = styled.div<JCDivProps>`
    width: 100%;
    display: flex;
    flex-direction: ${({direction}) => direction ? direction : "row"};
    justify-content: space-between;
    align-items: ${({alignitems}) => alignitems ? alignitems : "flex-start"};
    font-family: "IBM Plex Serif", serif;

    &:nth-child(2) {
        flex-grow: 1;
        justify-content: flex-start;
    }

    img {
        width: 35px;
        border-radius: 35px;
    }

    span {
        font-family: inherit;
        font-size: 12px;
        font-weight: 700;
        background-color: #ed6b5a;
        color: #fff;
        border-radius: 3px;
        padding: 5px;
        margin-bottom: 15px;
    }

    h4 {
        font-family: inherit;
        font-size: 20px;
        font-weight: 300;
        margin: 5px 0px;
    }

    p {
        font-family: inherit;
        font-size: 14px;
        font-weight: 300;
    }

    address {
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        padding-right: 10px;
    }

    button {
        font-family: inherit;
        font-size: 16px;
        font-weight: 500;
        padding: 5px 15px;
        border: 0px;
        background-color: #0c2c48;
        color: #fff;
        border-radius: 3px;
    }
`;

export const NoResults = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "IBM Plex Serif", serif;
    font-size: 20px;
    font-weight: 300;
    margin: 5px 0px;
    align-items: flex-start;

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
`;