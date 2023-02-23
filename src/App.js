import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cadastro } from "./pages/Cadastro";
import { EditCadastro } from "./pages/EditCadastro";
import { ExibirCadastros } from "./pages/ExibirCadastros";
import { Menubar } from "./pages/Menubar";
import { Footer } from "./pages/Footer";

function App() {
	return (
		<>
			<Menubar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cadastro" element={<Cadastro />} />
				<Route path="/exibir-cadastro" element={<EditCadastro />} />
				<Route path="/edit-cadastro" element={<ExibirCadastros />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
