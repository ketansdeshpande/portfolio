import React from "react";
import styled from "styled-components";

const TimelineItemWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  margin: 10px 0;
  width: 50%;

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-right: 0px;
    padding-left: 30px;
  }

  &:nth-child(odd) .timeline-item-content {
    align-items: flex-start;
    text-align: left;

    @media screen and (max-width: 768px) {
      padding: 15px 10px;
      text-align: center;
      align-items: center;
    }
  }

  &:nth-child(odd) .timeline-item-content::after {
    right: auto;
    left: -7.5px;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  &:nth-child(odd) .timeline-item-content .tag {
    left: auto;
    right: 15px;

    @media screen and (max-width: 768px) {
      right: 5px;
    }
  }

  &:nth-child(odd) .circle {
    right: auto;
    left: -40px;
  }
`;

const TimelineItemContent = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  max-width: 70%;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px;
  text-align: right;
  position: relative;

  &:after {
    content: " ";
    background-color: #fff;
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
    transform: rotate(45deg);
    position: absolute;
    width: 15px;
    height: 15px;
    right: -7.5px;
    top: calc(50% - 7.5px);
  }

  @media screen and (max-width: 768px) {
    width: 430px;
    padding: 15px 10px;
    text-align: center;
    align-items: center;
  }
`;

const Tag = styled.span`
  color: #fff;
  font-size: clamp(.7rem, 6vw, .5rem);
  font-weight: 400;
  padding: 5px;
  position: absolute;
  top: 5px;
  left: 15px;
  border-radius: 5px;
  box-shadow: 3px 3px rgba(0,0,0,0.1);

  @media screen and (max-width: 768px) {
    width: calc(100% - 10px);
    left: 5px;
    height: 35px;
  }
`;

const Time = styled.div`
  color: #777;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

const Text = styled.p`
  font-size: clamp(.8rem, 6vw, .8rem);
  line-height: 24px;
  margin: 15px 0;
  max-width: 250px;
`;

const CompanyLink = styled.a`
  color: #000d1a;
  text-decoration: none;
  font-family: inherit;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    text-decoration: underline;

    &:after {
      display: none;
    }
  }
`;

const Circle = styled.span`
  background-color: #cd853f;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: -40px;
  z-index: 10;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d5d5d5;
  margin-top: 5px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TimelineItem = ({ data }) => {
  return (
    <TimelineItemWrap
      data-aos={data.placement}
      data-aos-duration="1200"
      data-aos-delay={data.delay}
      data-aos-anchor-placement="center bottom"
    >
      <TimelineItemContent className="timeline-item-content">
        <Tag
          className="tag"
          style={{
            background: data.category.color,
          }}
        >
          {data.category.tag}
        </Tag>
        <Time>{data.date}</Time>
        <Line></Line>
        {data.link && (
          <h2>
            <CompanyLink
              href={data.link.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {data.link.text}
            </CompanyLink>
          </h2>
        )}
        <Text>{data.text}</Text>
        <Circle className="circle"></Circle>
      </TimelineItemContent>
    </TimelineItemWrap>
  );
};

export default TimelineItem;
