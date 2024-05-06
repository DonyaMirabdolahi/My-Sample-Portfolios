import React from 'react'
import styled from 'styled-components';

const Title=({title, span}) =>{
    return (
        <TitleStyled>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 3.1rem;
        font-weight: 550 !important;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
        @media screen and (max-width: 496px){
            font-size: 2.8rem;
        }
        @media screen and (max-width: 370px){
            font-size: 2rem;
        }
        &::before{
            content: "";
            position: absolute;
            bottom:-.5rem;
            width: 11rem;
            height: .33rem;
            background-color:rgba(0, 79, 155, 1);
            left:3rem;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width:11rem;
            height: .33rem;
            background-color:var(--primary-color);
            left: 0;
        }
        span{
            font-weight:700;
            color:rgba(78, 78, 78, 0.48);
            font-size: 8rem;
            position: absolute;
            left: 1%;
            top: 30%;
            z-index: -1;
            @media screen and (max-width: 620px){
                font-size: 4rem;
            }
            @media screen and (max-width: 496px){
                font-size: 3rem;
            }
            @media screen and (max-width: 370px){
                font-size: 2rem;
            }
        }
    }
`;

export default Title;