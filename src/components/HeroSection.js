import styled from "styled-components";
import React, { useState } from "react";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import ImageHero from "../images/hero-bg.jpg";
import { Button } from "./Button";
import Typewriter from 'typewriter-effect'

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 100%,
      rgba(0, 0, 0, 0.6) 100%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -100px;
`;

export const HeroH1 = styled.h1`
  color: #c4c99c;
  font-size: clamp(1.8rem, 6vw, 4rem);
  text-align: center;
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: clamp(1rem, 6vw, 1.2rem);
  text-align: center;
  max-width: 600px;
`;

export const HeroSpan = styled.span`
  color: #fff;
  font-size: clamp(1rem, 6vw, 1.2rem);
  text-align: center;
  max-width: 600px;
  display: flex;

  .Typewriter {
    color: #c4c99c;
    font-weight: bold;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
        <HeroImage src={ImageHero} alt="Hero Background" />
      </HeroBg>
      <HeroContent>
        <HeroP>My name is</HeroP>
        <HeroH1>Ketan Deshpande</HeroH1>
        <HeroSpan>
           I'm a&nbsp;
          <Typewriter
              options={{
                strings: ['front-end developer', 'web developer', 'JavaScript developer', 'UI developer'],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
        </HeroSpan>
        <HeroBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="false"
            dark="true"
            smooth="true"
            spy={true}
            exact="true"
          >
            Welcome {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
