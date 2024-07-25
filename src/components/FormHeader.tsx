import {
  Image,
  Section,
  Span,
  Title,
} from "../styledComponents/FormHeader.styled";

const FormHeader = () => {
  return (
    <Section>
      <Title>
        Formulario <Span>de Prueba</Span>
      </Title>
      <Image
        src="/Illustration.png"
        alt="Illustration vector"
        height={168}
        width={168}
      />
    </Section>
  );
};

export default FormHeader;
