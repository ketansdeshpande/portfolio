import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
  background: ${({ primary }) => (primary ? "#000D1A" : "#CD853F")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000D1A")};
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  border-radius: ${({ round }) => (round ? "50px" : "0px")};

  &:hover {
    transform: translateY(-2px);
  }
`;
