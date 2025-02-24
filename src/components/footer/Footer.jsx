import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center w-100 py-4">
      <div className="d-flex gap-4">
        <Link to="https://github.com/Diiegor98" target="_blank">
          <i className="bi bi-github fs-1 text-warning"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/diiegorodriguez/" target="_blank">
          <i className="bi bi-linkedin fs-1 text-warning"></i>
        </Link>
      </div>
      <p className="text-warning">Diego Rodríguez</p>
    </footer>
  );
};

export default Footer;
