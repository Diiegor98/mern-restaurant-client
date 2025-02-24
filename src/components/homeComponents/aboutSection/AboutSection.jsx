//React bootstrap
import { Image } from "react-bootstrap";

//Assets
import image from "../../../assets/animated.jpg";

const AboutSection = () => {
  return (
    <div className="bg-warning w-100 p-4 d-flex flex-column justify-content-center align-items-center">
      <div style={{ maxWidth: "1020px" }}>
        <h2 className="fs-1">SOBRE NOSOTROS</h2>
        <Image src={image} style={{ width: "200px" }} className="my-4" roundedCircle fluid />
        <p>
          En Hamburdev, cocinamos código y hamburguesas con la misma pasión.
          Somos un equipo de desarrolladores del sabor, programando la
          combinación perfecta de ingredientes para compilar la mejor
          experiencia gastronómica. Nuestro backend es una parrilla siempre
          encendida, nuestro frontend está lleno de colores y texturas que hacen
          agua la boca, y nuestra base de datos… bueno, está repleta de los
          ingredientes más frescos y deliciosos. Aquí, cada hamburguesa es una
          deploy de creatividad y sabor, con stacks bien estructurados de carne
          jugosa, quesos derretidos y salsas personalizadas. Y como todo buen
          código, nuestras recetas están en constante actualización para
          ofrecerte siempre lo mejor. Bienvenido a Hamburdev, donde cada bocado
          es un commit de felicidad.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
