import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Cadastro } from "./pages/Cadastro/index";
import { EditCadastro } from "./pages/EditCadastro/index";
import { ExibirCadastros } from "./pages/ExibirCadastros/index";
import { Menubar } from "./pages/Menubar/index";
import { Footer } from "./pages/Footer/index";
import { LogIn } from "./components/user/LogIn/index";

function App() {
	return (
		<>
			<Menubar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cadastro" element={<Cadastro />} />
				<Route path="/exibir-cadastros" element={<ExibirCadastros />} />
				<Route path="/edit-cadastro" element={<EditCadastro />} />
				<Route path="/login" element={<LogIn />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
