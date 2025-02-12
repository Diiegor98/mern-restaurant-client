import { useEffect, useState } from "react";
import MenuCard from "../components/menuCard/MenuCard";
import { getMenusFetch } from "../api/menu/getMenusFetch";
import { getMenusByCategoryFetch } from "../api/menu/getMenusByCategoryFetch";
import Navbar from "../components/Navbar/Navbar";
import { Image, Button, ButtonGroup } from "react-bootstrap";
import headerImg from "../assets/header.jpg";

const Home = () => {
  const [menus, setMenus] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = category
          ? await getMenusByCategoryFetch(category) // Filtrar por categoría
          : await getMenusFetch(); // Obtener todos los menús

        setMenus(data);
      } catch (error) {
        console.error("Error al obtener los menús:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="home__container // vh-100 d-flex flex-column justify-content-start align-items-start">
      <Navbar />
      <div className="home__header-imgcontainer // w-100">
        <Image
          className="home__header-img"
          src={headerImg}
          alt="Cabecera"
          fluid
        />
      </div>
      <ButtonGroup
        className="w-100 bg-light p-4 gap-2 rounded-0"
        aria-label="Basic example"
      >
        <Button variant="dark" onClick={() => setCategory("")}>
          Todas
        </Button>
        <Button variant="dark" onClick={() => setCategory("Clasica")}>
          Clasicas
        </Button>
        <Button variant="dark" onClick={() => setCategory("BBQ")}>
          BBQs
        </Button>
        <Button variant="dark" onClick={() => setCategory("Gourmet")}>
          Gourmets
        </Button>
        <Button variant="dark" onClick={() => setCategory("Vegetarianas")}>
          Vegetarianas
        </Button>
      </ButtonGroup>
      <div className="home__menu-container // bg-light w-100 d-flex flex-column justify-content-center align-items-center gap-4 p-4 flex-md-row flex-wrap">
        {!menus.length == 0 ? (
          menus.map((menu) => <MenuCard key={menu._id} menu={menu} />)
        ) : (
          <p>No se encontraron menus</p>
        )}
      </div>
    </div>
  );
};

export default Home;
