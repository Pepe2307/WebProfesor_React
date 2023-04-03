import  {BrowserRouter, Route, Switch} from 'react-router-dom';

import AnimatedRoutes from "./components/AnimatedRoutes";
import Header from "./components/Header";

function App() {
  const personalDetails = {
    name: "Capacitaciones Digitales",
    location: "Colegio Maximo/Punto Digital, San Miguel",
    tagline: "Municipalidad de San Miguel, Plan Decti",
    email: "municipalidad@mail",
    availability: "Open for work",
    brand:
      "Somos un grupo de capacitadores que ofrecemos formacion en multiples areas de las nuevas tecnologias, tales como la Robotica, Impresion 3D, Programacion en Scratch, Robotica para niños con bloques inteligentes (Cubroid) y Desarrollo Web!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
