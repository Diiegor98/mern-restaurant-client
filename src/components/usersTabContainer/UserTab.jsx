import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import styles from "./usertab.module.css";
import UpdateUserButton from  "../updateUserButton/UpdateUserButton"

const UserTab = ({ user }) => {
  const { name, email, role, status } = user;
  return (
    <Card className="d-flex flex-row justify-content-between justify-content-md-around align-items-center p-1 my-2">
      <p className={styles.usertab__name}>{name}</p>
      <p className={styles.usertab__category}>{email}</p>
      <p className={styles.usertab__role}>{role}</p>
      <Badge bg={status ? "success" : "danger"}>
        {status ? "Activo" : "No activo"}
      </Badge>
      <div className="d-flex flex-row gap-2">
        <UpdateUserButton user={user} />
      </div>
    </Card>
  );
};

export default UserTab;
