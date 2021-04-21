import React from "react";
import TimelineItem from "./TimelineItem";
import styled from "styled-components";
import expData from "../../data/ExperienceData";

const TimelineWrapper = styled.div`
  min-height: 100vh;
  margin: 0;
  // padding: 4rem 0;
  padding: 6rem calc((100vw - 1300px) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  position: relative;

  &:after {
    background-color: #cd853f;
    content: "";
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
  }
`;

const Heading = styled.h1`
  font-size: clamp(1.5rem, 6vw, 2rem);
  margin-bottom: 1rem;
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

const Timeline = () =>
  expData.length > 0 && (
    <TimelineWrapper id="experience">
      <TopLine>Experience</TopLine>
      <Heading>I've worked with</Heading>
      <TimelineContainer>
        {expData.map((data, index) => (
          <TimelineItem data={data} key={index} />
        ))}
      </TimelineContainer>
    </TimelineWrapper>
  );

export default Timeline;
