import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginFetch } from "../api/auth/loginFetch";
import { AuthContext } from "../context/AuthContext";
import { Card, Button } from "react-bootstrap";
import styles from "./registerAndLogin.module.css";

const LoginForm = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { access_token } = await loginFetch(formData);
      login(access_token);
      localStorage.setItem("token", access_token);
      navigate("/home");
      setError("");
    } catch (error) {
      setError(error.msg);
    }
  };

  return (
    <Card className={styles.form__container}>
      <Card.Title className={styles.form__brand}>HAMBURDEV</Card.Title>
      <form className={styles.form__form} onSubmit={handleSubmit}>
        <Card.Title className={`${styles.form__title} // mb-4 fw-bold fs-1`}>
          Iniciar Sesión
        </Card.Title>
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
        <p className={styles.form__text}>
          ¿No tienes una cuenta? <Link className={`${styles.form__link}  // fw-bold`} to="/">Regístrate</Link>
        </p>
      </form>
    </Card>
  );
};

export default LoginForm;
