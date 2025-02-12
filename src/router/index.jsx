//Imports React
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

//Pages
import RegisterForm from '../pages/RegisterForm';
import LoginForm from '../pages/LoginForm';
import Home from '../pages/Home';
import Admin from '../pages/Admin';

//Context
import { AuthContext } from '../context/AuthContext';


//Configuración de las rutas
const AppRouter = () => {
	const { user } = useContext(AuthContext);

	return (
		<Routes>
			<Route path="/" element={<RegisterForm />} />
			<Route path="/login" element={<LoginForm />} />
			<Route path="*" element={<LoginForm />} />
			{user ? (
				<>
					<Route path="/home" element={<Home />} />
					<Route path="/admin" element={<Admin />} />
				</>
			) : null}
		</Routes>
	);
};

export default AppRouter;