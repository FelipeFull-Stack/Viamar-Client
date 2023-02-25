import { ExibirCadastro } from "../../components/CRUD Cadastro/ExibirCadastro/index";
import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ExibirCadastros.module.css";

function ExibirCadastros() {
	const params = useParams();
	const [formADMIN, setFormADMIN] = useState([]);
	const [formUSER, setFormUSER] = useState(null);
	const [isAdmin, setIsAdmin] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function CheckUser() {
			try {
				const user = localStorage.getItem("loggedInUser");
				if (user) {
					const { _id, role } = JSON.parse(user).user;
					console.log(`ID do USER: ${_id}`);
					console.log(`ROLE do USER: ${role}`);
					setIsAdmin(role === "ADMIN");
				}
				if (isAdmin) {
					const response = await api.get("/cadastro/ADMIN/");
					console.log(response.data);
					setFormADMIN(response.date);
					setIsLoading(false);
				} else {
					const { _id } = JSON.parse(user).user;
					const response = await api.get(`/cadastro/${_id}`);
					setFormUSER(response.data);
					setIsLoading(false);
				}
			} catch (err) {
				console.log(`Erro do Back-end em ExibirCadastro/CheckUser: ${err}`);
				setIsLoading(false);
			}
		}
		CheckUser();
	}, []);

	return (
		<>
			<div>{formUSER}</div>
			<div>{formADMIN}</div>
		</>
	);
}

export { ExibirCadastros };

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
