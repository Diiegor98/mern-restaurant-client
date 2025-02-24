//React Router Dom
import { BrowserRouter } from "react-router-dom";

//Index de rutas
import AppRouter from "./router";

//Contexto global para rutas privadas
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

//Estilos
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
