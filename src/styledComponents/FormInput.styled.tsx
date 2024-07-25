import styled from "styled-components";

export const SubSection = styled.section`
  padding: 35px;
  border-bottom: 1px solid #e6dbdb;
  @media (min-width: 768px) {
    width: 65%;
    margin: auto;
  }
`;

type SubTitleProps = {
  readonly $fontSize?: string;
};

export const SubTitle = styled.h2<SubTitleProps>`
  font-size: ${(props) => props.$fontSize || "30px"};
  font-weight: 600;
  line-height: 36px;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HorizontalRuler = styled.hr`
  border: 0;
  background-color: #e3dada;
  height: 1px;
  margin-top: -20px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    height: 3px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
`;
