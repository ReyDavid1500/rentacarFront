import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 130px;
  padding-left: 35px;
  padding-right: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e6dbdb;
  @media (min-width: 768px) {
    height: 338px;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  color: #002eff;
  font-size: 24px;
  line-height: 24px;
  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 50px;
  }
`;

export const Span = styled.span`
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 50px;
  }
`;

export const Image = styled.img`
  position: relative;
  bottom: 8px;
  @media (min-width: 768px) {
    width: 424px;
    height: 424px;
    margin-right: 100px;
    bottom: -32px;
  }
`;
