import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 10px;
`;

export const Section = styled.section``;

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

export const TableText = styled(Text)`
  padding: 25px;
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 30px;
  border-collapse: collapse;
  border-spacing: 10px;
  text-align: center;
`;

export const Row = styled.tr`
  border-bottom-style: dotted;
  border-bottom: 2px solid #c5c2c2;
`;

export const TableHeader = styled.th`
  padding: 0px 10px 10px 10px;
  &:nth-child(1) {
    width: 250px;
  }
`;

export const TableData = styled.td`
  padding: 20px 0 10px 0;
`;

export const Image = styled.img`
  cursor: pointer;
`;
