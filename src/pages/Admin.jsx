//React Bootstrap
import { Tab, Tabs } from "react-bootstrap";

//Componentes propios
import NavBar from "../components/Navbar/Navbar";
import MenuTabContainer from "../components/adminComponents/menuTabContainer/MenuTabContainer";
import CreateMenuButton from "../components/adminComponents/createMenuButton/CreateMenuButton";
import UsersTabContainer from "../components/adminComponents/usersTabContainer/UsersTabContainer";
import OrdersTabContainer from "../components/adminComponents/ordersTabContainer/OrdersTabContainer";


const Admin = () => {
  return (
    <div className="d-flex flex-column justify-content-start align-items-start">
      <NavBar />
      <div className="w-100 mt-5">
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
            <UsersTabContainer />
          </Tab>
          <Tab eventKey="orders" title="Ordenes">
            <OrdersTabContainer />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
