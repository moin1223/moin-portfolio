import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import './TitleMessage.css';

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${(props) => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 300;
    letter-spacing: 6px;
    .main {
      font-size: 70px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
    @media screen and (max-width: 700px) {
      .main {
        font-size: 28px;
      }
      .sub{
        font-size: 20px;
      letter-spacing: 2px;
      }
    }
  }
`;

const TitleMessage = () => {
  return (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Hi, I am <br />
            <span>
              <strong className="my-name">Moin Uddin</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Web developer", "Fast Learner", "Curious Programmer"],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
};

export default TitleMessage;
