import styled from "styled-components";

export const Button = styled.button`
  background-color: #002eff;
  border-radius: 20px;
  border: 1px solid #fff;
  color: #fff;
  margin: 0 1em;
  padding: 10px 40px;
  cursor: pointer;
  width: fit-content;
  align-self: center;

  &:hover {
    background-color: #0222b0;
    font-weight: bolder;
  }
  @media (min-width: 768px) {
    align-self: flex-end;
  }
`;
