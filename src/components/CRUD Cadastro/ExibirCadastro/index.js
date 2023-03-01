import "./ExibirCadastro.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api.js";

function ExibirCadastro() {
	const navigate = useNavigate();

	const [cadastros, setCadastros] = useState([]);

	useEffect(() => {
		async function fetchCadastros() {
			try {
				const response = await api.get("/cadastro/ADMIN");
				setCadastros(response.data);
			} catch (err) {
				console.log(`Erro do Front-end em ExibirCadastro: ${err}`);
			}
		}
		fetchCadastros();
	}, []);

	return ( //ADMIN
		<>
			<div className="div-geral-exibircadastros">
				<h1 style={{ marginBottom: "20px" }} className="h1-personalizado">
					Lista de Reservas
				</h1>
				
				{cadastros.reverse().map((currentElement) => {
					const formattedDate = new Date(
						currentElement.createdAt,
					).toLocaleDateString("pt-BR");
					return (
						<div  key={currentElement._id} className="div-map-cadastros">
							<div className="div-button-ver">
								<button
									className="button-ver"
									onClick={() => {
										navigate(`/detalhe-cadastro/${currentElement._id}`);
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
									<h2>Nº de Protocolo: </h2>
									<p>{currentElement.numeroReserva}</p>
								</div>
							</div>
							<div className="div-dupla-cadastro">
								<div className="div-unica-cadastro">
									<h2>Excursionista: </h2>
									<p>{currentElement.nomeExcursionista}</p>
								</div>
								<div className="div-unica-cadastro">
									<h2>Pagamento: </h2>
									<p>{currentElement.pagamento}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export { ExibirCadastro };
