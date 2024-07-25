import Input from "./Input";
import SelectInput from "./SelectInput";
import { Button } from "../styledComponents/Button.styled";
import { useForm } from "react-hook-form";
import { addNewCarToList, CarState } from "../fetures/carSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../hooks/reduxHooks";
import {
  Form,
  HorizontalRuler,
  SubSection,
  SubTitle,
  Text,
  Wrapper,
  Wrapper2,
} from "../styledComponents/FormInput.styled";
import { schema } from "../yupSchema/schema";
import { cars } from "../mockData/cars";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const FormInput = () => {
  const [modelOptions, setModelOptions] = useState<string[]>([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<CarState>({ resolver: yupResolver(schema) });

  const submitHandler = (data: CarState) => {
    try {
      dispatch(addNewCarToList(data));
      navigate("/list");
    } catch (err) {
      console.log(err);
    }
  };

  const selectedBrand: string = watch("brand");

  useEffect(() => {
    if (selectedBrand) {
      const findBrand = cars.find((car) => car.brand === selectedBrand);
      const modelOptions = findBrand?.models ? findBrand.models : [];
      setModelOptions(modelOptions);
    }
  }, [selectedBrand]);

  return (
    <SubSection>
      <SubTitle>Nuevo Formulario</SubTitle>
      <Text>
        En este formulario puede ingresar todos sus datos para procesar el
        arriendo de su vehiculo
      </Text>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <SubTitle $fontSize="20px">Datos del Vendedor:</SubTitle>
        <Wrapper>
          <Input
            register={register}
            id="name"
            name="name"
            title="Nombre completo"
            error={errors.name?.message}
          />
          <Input
            register={register}
            id="rut"
            name="rut"
            title="Rut Vendedor"
            error={errors.rut?.message}
          />
        </Wrapper>
        <HorizontalRuler />
        <SubTitle $fontSize="20px">Datos del Vehículo:</SubTitle>
        <Wrapper2>
          <Input
            register={register}
            id="carNumber"
            name="carNumber"
            title="Patente del vehículo"
            error={errors.carNumber?.message}
          />
          <SelectInput
            register={register}
            name="brand"
            title="Marca del vehículo"
            error={errors.brand?.message}
          >
            {cars.map((car) => (
              <option value={car.brand} key={car.id}>
                {car.brand}
              </option>
            ))}
          </SelectInput>
          <SelectInput
            register={register}
            name="model"
            title="Modelo del vehículo"
            error={errors.model?.message}
            disabled={!watch("brand")}
          >
            {modelOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </SelectInput>
          <Input
            register={register}
            id="color"
            name="color"
            title="Color"
            error={errors.color?.message}
          />
          <Input
            register={register}
            id="price"
            name="price"
            title="Precio del vehículo"
            error={errors.price?.message}
            type="number"
          />
        </Wrapper2>
        <HorizontalRuler />
        <Button type="submit">Enviar</Button>
      </Form>
    </SubSection>
  );
};

export default FormInput;
