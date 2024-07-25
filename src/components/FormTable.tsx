import Layout from "./Layout";
import { formatCurrency } from "../utils/formatCurrency";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  Image,
  Row,
  Section,
  SubTitle,
  Table,
  TableData,
  TableHeader,
  TableText,
  Text,
  Wrapper,
} from "../styledComponents/FormTable.styled";
import { removeCarFromList } from "../fetures/carSlice";
import { useEffect } from "react";

const tableHeaders = [
  { id: 1, header: "Nombre" },
  { id: 2, header: "Rut vendedor" },
  { id: 3, header: "Patente vehículo" },
  { id: 4, header: "Marca vehículo" },
  { id: 5, header: "Modelo vehículo" },
  { id: 6, header: "Color vehículo" },
  { id: 7, header: "Precio" },
  { id: 8, header: "Eliminar" },
];

const FormTable = () => {
  const carData = useAppSelector((state) => state.car);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeCarFromList(id));
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const displayedCarData = carData.slice(0, 10);

  return (
    <Layout>
      <Wrapper>
        <Section>
          <SubTitle>Lista Formulario</SubTitle>
          <Text>
            A continuación se presenta la lista de los autos que han sido
            reservados en el rent a car. Por favor verificar cada uno de las
            entradas de la lista.
          </Text>
        </Section>
        <Table>
          <thead>
            <Row>
              {tableHeaders.map((item) => (
                <TableHeader key={item.id}>{item.header}</TableHeader>
              ))}
            </Row>
          </thead>
          <tbody>
            {displayedCarData.map((item) => (
              <Row key={item.id}>
                <TableData>{item.name}</TableData>
                <TableData>{item.rut}</TableData>
                <TableData>{item.carNumber.toUpperCase()}</TableData>
                <TableData>{item.brand}</TableData>
                <TableData>{item.model}</TableData>
                <TableData>{item.color}</TableData>
                <TableData>{formatCurrency(item.price)}</TableData>
                <TableData onClick={() => handleDelete(item.id)}>
                  <Image src="/Eliminar.png" />
                </TableData>
              </Row>
            ))}
          </tbody>
        </Table>
        <TableText>
          Mostrando registros del 1 al 10 de un total de {carData.length}{" "}
          registros.
        </TableText>
      </Wrapper>
    </Layout>
  );
};

export default FormTable;
