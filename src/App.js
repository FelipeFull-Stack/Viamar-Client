import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "./context/authContext";
import { Home } from "./pages/Home/index";
import { Cadastro } from "./pages/Cadastro/index";
import { EditCadastro } from "./pages/EditCadastro/index";
import { DetalheCadastro } from "./components/CRUD Cadastro/DetalheCadastro/index";
import { ExibirCadastros } from "./pages/ExibirCadastros/index";
import { Menubar } from "./pages/Menubar/index";
import { Footer } from "./pages/Footer/index";
import { LogIn } from "./components/user/LogIn/index";
import { SignUp } from "./components/user/SignUp/index";
import { MyContextComponent } from "./context/MyContext";
import "./App.css";

function App() {
	return (
		<>
			<MyContextComponent>
				<AuthContextComponent>
					<Menubar />
					<Routes>
						<Route path="/" element={<LogIn />} />
						<Route path="/cadastro" element={<Cadastro />} />
						<Route path="/exibir-cadastros" element={<ExibirCadastros />} />
						<Route path="/detalhe-cadastro/:id" element={<DetalheCadastro />} />
						<Route path="/editar-cadastro/:id" element={<EditCadastro />} />
						<Route path="/login" element={<LogIn />} />
						<Route path="/signup" element={<SignUp />} />
					</Routes>
					<Footer />
				</AuthContextComponent>
			</MyContextComponent>
		</>
	);
}

export default App;
