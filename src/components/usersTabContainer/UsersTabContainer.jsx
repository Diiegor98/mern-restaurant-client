import { useEffect, useState } from "react";
import { getUsersFetch } from "../../api/user/getUsersFetch";
import UserTab from "./UserTab";

const UsersTabContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersFetch()
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, [users]);

  return (
    <div className="d-flex flex-column bg-light">
      {users.map((user) => (
        <UserTab key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UsersTabContainer;
