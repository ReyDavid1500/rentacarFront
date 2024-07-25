import { UseFormRegister } from "react-hook-form";
import { CarState } from "../fetures/carSlice";
import {
  Label,
  Span,
  StyledInput,
  Text,
  Wrapper,
} from "../styledComponents/Input.styled";

type InputProps = {
  title: string;
  id: string;
  type?: React.HTMLInputTypeAttribute;
  error?: string;
  name: keyof CarState;
  register: UseFormRegister<CarState>;
};

const Input = ({
  title,
  name,
  id,
  error,
  register,
  type = "text",
}: InputProps) => {
  return (
    <Wrapper>
      <Label>
        {title} <Span>*</Span>
      </Label>
      <StyledInput {...register(name)} name={name} id={id} type={type} />
      <Text>{error}</Text>
    </Wrapper>
  );
};

export default Input;
