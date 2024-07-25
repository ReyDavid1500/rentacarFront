import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 35px;
`;

export const Label = styled.label`
  position: absolute;
  background-color: white;
  font-size: 14px;
  left: 23px;
  top: -7px;
  padding-left: 5px;
  padding-right: 5px;
  color: #002eff;
  font-weight: 500;
  z-index: 10;
`;
export const StyledInput = styled.select`
  height: 58px;
  width: 100%;
  border-radius: 10px;
  margin-right: 2px;
  padding-left: 15px;
  border: 2px solid #002eff;
`;
export const Span = styled.span`
  color: red;
`;

export const Text = styled.p`
  color: red;
  margin-top: 5px;
  font-size: 13px;
`;
