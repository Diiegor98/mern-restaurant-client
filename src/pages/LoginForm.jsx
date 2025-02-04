import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginFetch } from "../api/loginFetch";
import { AuthContext } from "../context/AuthContext";

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
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      {error && <p className="alert alert-danger">{error}</p>}
      <button type="submit">Login</button>
      <p>
        ¿No tienes una cuenta? <Link to="/">Regístrate</Link>
      </p>
    </form>
  );
};

export default LoginForm;
