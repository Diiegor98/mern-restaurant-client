//React
import { useEffect, useState } from "react";

//Componente de cada usuario
import UserTab from "./UserTab";

//Funcion para obtener todos los usuarios
import { getUsersFetch } from "../../../api/user/getUsersFetch";


const UsersTabContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersFetch()
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, [users]);

  return (
    <div className="d-flex flex-column mt-2 p-2">
      {users.map((user) => (
        <UserTab key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UsersTabContainer;
