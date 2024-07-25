import { ReactNode } from "react";
import { CarState } from "../fetures/carSlice";
import { UseFormRegister } from "react-hook-form";
import {
  Label,
  Span,
  StyledInput,
  Text,
  Wrapper,
} from "../styledComponents/SelectInput.styled";

type SelectInputProps = {
  title: string;
  error?: string;
  name: keyof CarState;
  children: ReactNode;
  register: UseFormRegister<CarState>;
  disabled?: boolean;
};

const SelectInput = ({
  title,
  children,
  register,
  name,
  error,
  disabled = false,
}: SelectInputProps) => {
  return (
    <Wrapper>
      <Label>
        {title} <Span>*</Span>
      </Label>
      <StyledInput disabled={disabled} {...register(name)} defaultValue="">
        <>
          <option value="">Selecciona</option>
          {children}
        </>
      </StyledInput>
      <Text>{error}</Text>
    </Wrapper>
  );
};

export default SelectInput;
