import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerFetch } from "../api/auth/registerFetch"
import { Button, Card } from "react-bootstrap";
import styles from "./registerAndLogin.module.css";

const RegisterForm = () => {
  /* 
	datos del formulario
   */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  /* Navigate para redireccionar luego de crear el usuario */
  const navigate = useNavigate();

  /* 
	validacion de formulario
   */
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /* 
	obtener los datos del formulario de registro
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerFetch(formData);
      setSuccess(res.msg);
      setError("");
      setTimeout(() => {
        navigate("/login");
      }, "2000");
    } catch (error) {
      setSuccess(false);
      setError(error.msg);
    }
  };

  return (
    <Card className={styles.form__container}>
      <Card.Title className={styles.form__brand}>HAMBURDEV</Card.Title>
      <form className={styles.form__form} onSubmit={handleSubmit}>
        <Card.Title className={`${styles.form__title} // mb-4 fw-bold fs-1`}>
          Registrate
        </Card.Title>
        <div className={`${styles.form__namelabel} // mb-3`}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.form__nameinput}
          />
        </div>
        <div className={`${styles.form__emaillabel} // mb-3`}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.form__emailinput}
          />
        </div>
        <div className={`${styles.form__passwordlabel} // mb-3`}>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleInputChange}
            className={styles.form__passwordinput}
          />
        </div>
        {error && <p className="alert alert-danger">{error}</p>}
        <Button className={`${styles.form__button} // my-4 w-100`} type="submit">
          Enviar
        </Button>
        {success && <p className="alert alert-success">{success}</p>}
        <p className={styles.form__text}>
          ¿Ya tienes una cuenta?{" "}
          <Link className={`${styles.form__link}  // fw-bold`} to="/login">
            Iniciar sesión
          </Link>
        </p>
      </form>
    </Card>
  );
};

export default RegisterForm;
