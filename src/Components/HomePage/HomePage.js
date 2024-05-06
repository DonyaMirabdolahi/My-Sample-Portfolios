import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { IoMdMenu } from "react-icons/io";

const HomePage = () => {
  return (
    <>
      <HomePageStyled>
        <div className="typography">
          <h1>
            Hi, I'm <span>Donya Mirabdollahi</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil
            voluptates ea dolore vel repellat? Quia tenetur non quam
            exercitationem. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet.
          </p>
          <div className="icons">
            <a href="https://www.facebook.com/" className="icon i-facebook">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/" className="icon i-youtube">
              <FaYoutube />
            </a>
            <a href="https://github.com/" className="icon i-github">
              <VscGithub />
            </a>
          </div>
        </div>
      </HomePageStyled>
    </>
  );
};


const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: blue;
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: 1rem;
                    font-size:2rem;
                }
            }

            .i-youtube{
                &:hover{
                  border:2px solid var(--primary-color);
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border:2px solid var(--primary-color);
                    color: #5F4687;
                }
            }
        }
    }
`;
export default HomePage;
