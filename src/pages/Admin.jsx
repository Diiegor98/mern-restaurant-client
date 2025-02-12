import Navbar from "../components/Navbar/Navbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MenuTabContainer from "../components/menuTabContainer/MenuTabContainer";
import { Image } from "react-bootstrap";
import headerImg from "../assets/header.jpg";
import CreateMenuButton from "../components/createMenuButton/CreateMenuButton";

const Admin = () => {
  return (
    <div className="admin__container // d-flex flex-column justify-content-start align-items-start">
      <Navbar />
      <div className="home__header-imgcontainer // w-100">
        <Image
          className="home__header-img"
          src={headerImg}
          alt="Cabecera"
          fluid
        />
      </div>
      <div className="admin__tabscontainer // bg-light w-100 vh-100">
        <Tabs
          defaultActiveKey="menus"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="menus" title="Menus">
            <CreateMenuButton />
            <MenuTabContainer />
          </Tab>
          <Tab eventKey="usuarios" title="Usuarios">
            Tab content for Profile
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
