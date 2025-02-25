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
import { Button, Container } from "react-bootstrap";

const Home = () => {
  //Estado que guarda los menus a mostrar
  const [menus, setMenus] = useState([]);

  //Estado que guarda la categoría de los menus a mostrar
  const [category, setCategory] = useState("");

  // Estado para la paginación
  const [page, setPage] = useState(1);
  const itemsPerPage = 10; // Cambia esto según el número de menús por página

  //UseEffect para traer la data de los menús y filtrar por categoría
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Mira si hay una categoría seleccionada en el estado category y devuelve el fetch correspondiente
        const data = category
          ? await getMenusByCategoryFetch(category)
          : await getMenusFetch();

        setMenus(data);
        setPage(1); // Reiniciar a la primera página cuando cambia la categoría
      } catch (error) {
        console.error("Error al obtener los menús:", error);
      }
    };

    fetchData();
  }, [category]);

  // Cálculo de los menús a mostrar en la página actual
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMenus = menus.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="d-flex flex-column justify-content-start align-items-start">
      <NavBar />
      <ButtonsCategory setCategory={setCategory} />
      <MenuContainer menus={currentMenus} />
      <Container className="py-4">
        <Button
          variant="warning"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Anterior
        </Button>
        <span
          className="text-light px-3
        "
        >
          Página {page} de {Math.ceil(menus.length / itemsPerPage)}
        </span>
        <Button
          variant="warning"
          onClick={() => setPage(page + 1)}
          disabled={page >= Math.ceil(menus.length / itemsPerPage)}
        >
          Siguiente
        </Button>
      </Container>
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
