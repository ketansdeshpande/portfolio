import React from "react";
import Icon1 from "../../images/static_assets.svg";
import Icon2 from "../../images/server_cluster.svg";
import Icon3 from "../../images/in_progress.svg";
import {
  SkillCard,
  SkillContainer,
  SkillH1,
  SkillH2,
  SkillIcon,
  SkillP,
  SkillWrapper,
  TopLine,
} from "./SkillElements";

const Skills = () => {
  return (
    <SkillContainer id="skills">
      <TopLine>Skills</TopLine>
      <SkillH1>Technologies I work with</SkillH1>
      <SkillWrapper>
        <SkillCard
          data-aos="zoom-out-down"
          data-aos-duration="1400"
          data-aos-anchor-placement="center left"
        >
          <SkillIcon src={Icon1} />
          <SkillH2>Front-end</SkillH2>
          <SkillP>
            HTML/CSS, Bootstrap, JavaScript, jQuery, Express, React, Angular JS,
            Ajax
          </SkillP>
        </SkillCard>
        <SkillCard
          data-aos="zoom-out-down"
          data-aos-duration="1400"
          data-aos-anchor-placement="center bottom"
        >
          <SkillIcon src={Icon2} />
          <SkillH2>Languages & Databases</SkillH2>
          <SkillP>
            PHP, Java, Node.js, Python, C, C++, MySQL, MongoDB, JSON, XML
          </SkillP>
        </SkillCard>
        <SkillCard
          data-aos="zoom-out-down"
          data-aos-duration="1400"
          data-aos-anchor-placement="center right"
        >
          <SkillIcon src={Icon3} />
          <SkillH2>Tools</SkillH2>
          <SkillP>
            Git, SVN, Google Cloud Platform, Unity 3D, Adobe Photoshop, Adobe
            Lightroom
          </SkillP>
        </SkillCard>
      </SkillWrapper>
    </SkillContainer>
  );
};

export default Skills;
