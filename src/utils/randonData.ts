export const generateRandomData = () => {
  const names = [
    "Alice Smith",
    "Bob Johnson",
    "Charlie Brown",
    "Daisy Lee",
    "Ella Davis",
  ];
  const carNumbers = ["XYZ123", "DEF456", "GHI789", "JKL321", "MNO654"];
  const brands = ["Toyota", "Nissan", "Kia", "Volkswagen", "Suzuky"];
  const models = [
    "Rav4",
    "Corolla",
    "Baleno",
    "Swift",
    "NP300",
    "X-trail",
    "Sorento",
    "Sportage",
    "Amarok",
    "Tiguan",
  ];
  const colors = ["Azul", "Plomo", "Negro", "Blanco", "Rojo"];

  const randomData = [];
  for (let i = 1; i <= 15; i++) {
    const randomIndex = Math.floor(Math.random() * 5);
    const obj = {
      id: i.toString(),
      name: names[randomIndex],
      rut:
        Math.floor(10000000 + Math.random() * 90000000) +
        "-" +
        Math.floor(1 + Math.random() * 9),
      carNumber: carNumbers[randomIndex],
      brand: brands[randomIndex],
      model: models[randomIndex],
      color: colors[randomIndex],
      price: Math.floor(500 + Math.random() * 1500),
    };
    randomData.push(obj);
  }
  return randomData;
};
