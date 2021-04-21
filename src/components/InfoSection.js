import React from "react";
import styled from "styled-components";
// import { Button } from "./Button";

const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
  position: relative;
`;

const Container = styled.div`
  padding: 0rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TopLine = styled.p`
  color: #858199;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 8px !important;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 1rem;

  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 70%;
    height: 70%;
    object-fit: cover;
    filter: brightness(90%);
    box-shadow: 10px 10px 10px #ccc;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  id,
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
  delay,
  topLine,
}) => {
  return (
    <InfoWrapper id={id}>
      <Container>
        <ColumnLeft
          reverse={reverse}
          data-aos="fade-up"
          data-aos-duration="1000"
          // data-aos-once="true"
          data-aos-delay={delay}
          data-aos-anchor-placement="center bottom"
        >
          <TopLine>{topLine}</TopLine>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          {/* <Button to="/homes" primary={true}>
            {buttonLabel}
          </Button> */}
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img
            src={image}
            alt="home"
            data-aos="zoom-out"
            data-aos-duration="1000"
            // data-aos-once="true"
            data-aos-delay={delay}
            data-aos-anchor-placement="center bottom"
          />
        </ColumnRight>
      </Container>
    </InfoWrapper>
  );
};

export default InfoSection;
