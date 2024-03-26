import styled from "styled-components";

export const BackToTopContainer = styled.div`
  border-top: 1px solid rgb(236, 239, 241);
  border-bottom: 1px solid rgb(207, 216, 220);
  padding: 20px 0;
`;

export const BackToTopLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackToTopIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12pt;
  padding: 10px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: rgba(190, 190, 190, 0.41);
  margin: 0 10px;
`;

export const BackToTopText = styled.p`
  font-size: 14pt;
  color: rgb(74, 74, 74);
`;