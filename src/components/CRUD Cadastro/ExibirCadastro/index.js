import "./ExibirCadastro.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../../api/api";

function ExibirCadastro() {
	const params = useParams();
	const navigate = useNavigate();

	const [cadastros, setCadastros] = useState([]);

	useEffect(() => {
		async function fetchCadastros(req, res) {
			try {
				const response = await api.put("/cadastro");
				setCadastros(response.data);
			} catch (err) {
				console.log(`Erro do Front-end em ExibirCadastro: ${err}`);
			}
		}
		fetchCadastros();
	}, []);

	return (
		<>
			<div className="div-geral-exibircadastros">
				<h1>Cadastros</h1>
				{cadastros.map((currentElement) => {
					return (
						<>
							<div className="div-map-cadastros">
								<div className="div-button-ver">
									<button
										className="button-ver"
										onClick={() => {
											navigate(`/edit-cadastro/${params.currentElement._id}`);
										}}>
										Ver
									</button>
								</div>
								<div className="div-dupla-cadastro">
									<div className="div-unica-cadastro">
										<h2>Motorista: </h2>
										<p>{currentElement.nomeMotorista}</p>
									</div>
									<div className="div-unica-cadastro">
										<h2>Telefone: </h2>
										<p>{currentElement.telefoneMotorista}</p>
									</div>
								</div>
								<div className="div-dupla-cadastro">
									<div className="div-unica-cadastro">
										<h2>Duração: </h2>
										<p>{currentElement.quantidadeDias}</p>
									</div>
									<div className="div-unica-cadastro">
										<h2>Criação do Cadastro: </h2>
										<p>{currentElement.createdAt}</p>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
}

export { ExibirCadastro };
