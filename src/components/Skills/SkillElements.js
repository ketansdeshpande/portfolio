import styled from "styled-components";

export const SkillContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }

  @media screen and (max-width: 480px) {
    height: 1400px;
  }
`;

export const SkillWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  padding: 0 auto;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const SkillCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SkillIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const SkillH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 2rem);
  margin-bottom: 5rem;
`;

export const SkillH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const SkillP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const TopLine = styled.p`
  color: #858199;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 8px !important;
`;
