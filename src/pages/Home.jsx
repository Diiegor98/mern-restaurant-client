//React
import { useEffect, useState } from "react";

//Componentes
import NavBar from "../components/Navbar/Navbar";
import ButtonsCategory from "../components/homeComponents/buttonsCategory/ButtonsCategory";
import MenuContainer from "../components/homeComponents/menuContainer/MenuContainer";
import AboutSection from "../components/homeComponents/aboutSection/AboutSection";
import Footer from "../components/footer/Footer";

//Funciones
import { getMenusFetch } from "../api/menu/getMenusFetch";
import { getMenusByCategoryFetch } from "../api/menu/getMenusByCategoryFetch";


const Home = () => {
  //Estado que guarda los menus a mostrar
  const [menus, setMenus] = useState([]);

  //Estado que guarda la categoría de los menus a mostrar
  const [category, setCategory] = useState("");

  //UseEffect para traer la data de los menús y filtrar por categoría
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Mira si hay una categoría seleccionada en el estado category y devuelve el fetch correspondiente
        const data = category
          ? await getMenusByCategoryFetch(category)
          : await getMenusFetch();

        setMenus(data);
      } catch (error) {
        console.error("Error al obtener los menús:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div
      className="d-flex flex-column justify-content-start align-items-start"
    >
      <NavBar />
      <ButtonsCategory setCategory={setCategory} />
      <MenuContainer menus={menus} />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
