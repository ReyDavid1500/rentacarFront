import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("El nombre es requerido"),
  rut: yup
    .string()
    .required("El rut es requerido")
    .matches(
      /^(\d{1,2}\.\d{3}\.\d{3}-(\d|K)|\d\.\d{3}\.\d{3}-(\d|K))$/,
      "Rut invalido"
    ),
  carNumber: yup
    .string()
    .required("La patente es requerida")
    .matches(/^(\b[A-Z]{2,4}\d{2,4}\b)$/i, "Patente invalida")
    .length(6, "Patente"),
  brand: yup.string().required("La marca es requerida"),
  model: yup.string().required("El modelo es requerido"),
  color: yup.string().required("El color es requerido"),
  price: yup
    .number()
    .min(0)
    .typeError("El precio debe ser un número")
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return undefined;
      }
      return value;
    })
    .required("El precio es requerido"),
});
