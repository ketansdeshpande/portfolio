import React from "react";
import styled from "styled-components";
// import { Button } from "./Button";
import ImageOne from "../images/education.jpg";

const EducationSection = styled.div`
  // background: #000d1a;
  background: #f5f5f5;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  justify-content: flex-start;
  padding: 1rem;
`;

const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    margin-bottom: 0;
    font-size: 1rem;
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.5;
  }
`;

const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Features = () => {
  return (
    <EducationSection id="education">
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content
              data-aos="fade-right"
              data-aos-duration="1200"
              // data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <h2>Education</h2>
              <br />
              <ul>
                <li>
                  <h1>Binghamton University</h1>
                  <p>Master's in Computer Science (MS)</p>
                </li>
                <li>
                  <h1>Babasaheb Ambedkar Marathwada University</h1>
                  <p>Master's in Computer Applications (MCA)</p>
                </li>
                <li>
                  <h1>Babasaheb Ambedkar Marathwada University</h1>
                  <p>Bachelor's in Computer Science (BCS)</p>
                </li>
              </ul>

              {/* <Button to="/homes">Learn More</Button> */}
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={ImageOne}
              data-aos="fade-left"
              data-aos-duration="1200"
              // data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </Wrap>
      </Container>
    </EducationSection>
  );
};

export default Features;
