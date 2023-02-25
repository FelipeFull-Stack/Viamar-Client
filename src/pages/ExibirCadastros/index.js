import { ExibirCadastro } from "../../components/CRUD Cadastro/ExibirCadastro/index";
import { ExibirCadastroUSER } from "../../components/CRUD Cadastro/ExibirCadastroUSER/index";
import { api } from "../../api/api";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../../context/MyContext";
// import { useParams } from "react-router-dom";
import "./ExibirCadastros.module.css";

function ExibirCadastros() {
	// const params = useParams();
	const [formADMIN, setFormADMIN] = useState([]);
	const [formUSER, setFormUSER] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { adm, setAdm } = useContext(MyContext);

	useEffect(() => {
		async function CheckUser() {
			try {
				const user = localStorage.getItem("loggedInUser");

				const { role } = JSON.parse(user).user;
				setAdm(role === "ADMIN");

				if (adm) {
					console.log("adm é true");
					const response = await api.get("/cadastro/ADMIN/");
					setFormADMIN(response.data);
				} else {
					const { _id } = JSON.parse(user).user;
					console.log("adm é false");
					const response = await api.get(`/cadastro/${_id}`);
					setFormUSER(response.data);
				}
				setIsLoading(false);
			} catch (err) {
				console.log(`Erro do Front-end em ExibirCadastro/CheckUser: ${err}`);
				setIsLoading(false);
			}
		}
		CheckUser();
	}, []);

	return (
		<>
			{adm === true ? (
				<ExibirCadastro /> //adm
			) : (
				<ExibirCadastroUSER /> //user
			)}
		</>
	);
}

export { ExibirCadastros };

/* {formADMIN.map((currentElement) => {
					return <h1 key={currentElement.key}>{currentElement.localOrigem}</h1>;
				})} */

// api.get(`/cadastro/${user._id}`).then((response) => {
// 	setFormUSER(response.data);
// 	setIsLoading(false);
// });

// useEffect(() => {
// 	// Verifica se o usuário está autenticado e é um ADMIN
// 	const user = localStorage.getItem("user");
// 	if (user) {
// 		const { role } = JSON.parse(user);
// 		setIsAdmin(role === "ADMIN");
// 	}

// 	// Carrega todos os usuários caso o usuário seja um ADMIN
// 	if (isAdmin) {
// 		api.get("/api/users").then((response) => {
// 			setFormADMIN(response.data);
// 			setIsLoading(false);
// 		});
// 	} else {
// 		api.get("/api/user").then((response) => {
// 			setCurrentUser(response.data);
// 			setIsLoading(false);
// 		});
// 	}
// }, []);
