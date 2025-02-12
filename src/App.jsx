//React Router Dom
import { BrowserRouter } from "react-router-dom";

//Index de rutas
import AppRouter from "./router";

//Contexto global para rutas privadas
import { AuthProvider } from "./context/AuthContext";

import './App.css'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
