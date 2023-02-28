import "./ExibirCadastroUSER.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api.js";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../../context/authContext";

function ExibirCadastroUSER() {
	const navigate = useNavigate();

	const [cadastros, setCadastros] = useState([]);
	// const { loggedInUser } = useContext(AuthContext);
	const user = localStorage.getItem("loggedInUser");
	const { _id } = JSON.parse(user).user;

	useEffect(() => {
		async function fetchCadastros() {
			try {
				const response = await api.get(`/cadastro/${_id}`);
				setCadastros(response.data);
			} catch (err) {
				console.log(`Erro do Front-end em ExibirCadastro: ${err}`);
			}
		}
		fetchCadastros();
	}, []);

	return (
		//USER
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
						<div key={currentElement._id} className="div-map-cadastros">
							<div className="div-button-ver">
								<button
									className="button-ver"
									type="button"
									disabled={currentElement.habilitado}
									style={{
										backgroundColor: currentElement.color,
										color: "white",
									}}
									onClick={() => {
										window.open(
											`https://wa.me/5522998200724?text=*Olá%20Estacionamento%20ViaMar*%0AQuero%20*PAGAR*%20esta%20*RESERVA*%0AEmpresa%20de%20Ônibus:%20*${currentElement.empresaOnibus}*%0APlaca:%20*${currentElement.placaOnibus}*%0AMotorista%20e%20Telefone:%20*${currentElement.nomeMotorista}%20-%20${currentElement.telefoneMotorista}*%0AExcursionista%20e%20Telefone:%20*${currentElement.nomeExcursionista}%20-%20${currentElement.telefoneExcursionista}*%0AHospedagem:%20*${currentElement.localHospedagem}*%0AData%20da%20Entrada:%20*${currentElement.dataEntrada}*%0AData%20da%20Saída:%20*${currentElement.dataSaida}*%0ALocal%20de%20Origem:%20*${currentElement.localOrigem}*%0AVeículo:%20*${currentElement.veiculoUsado}*%0AHorário%20de%20Entrada:%20*${currentElement.horaEntrada}Hrs*%0AHorário%20de%20Saída:%20*${currentElement.horaSaida}Hrs*%0ADAM:%20*${currentElement.DAM}*%0AProtocolo%20da%20Reserva:%20*${currentElement._id}*`,
										);
									}}>
									Pagar
								</button>

								{/* <a
										disabled={currentElement.habilitado}
										style={{ textDecoration: "none", color: "white" }}
										href={`https://wa.me/5522998200724?text=*Olá%20Estacionamento%20ViaMar*%0AQuero%20*PAGAR*%20esta%20*RESERVA*%0AEmpresa%20de%20Ônibus:%20*${currentElement.empresaOnibus}*%0APlaca:%20*${currentElement.placaOnibus}*%0AMotorista%20e%20Telefone:%20*${currentElement.nomeMotorista}%20-%20${currentElement.telefoneMotorista}*%0AExcursionista%20e%20Telefone:%20*${currentElement.nomeExcursionista}%20-%20${currentElement.telefoneExcursionista}*%0AHospedagem:%20*${currentElement.localHospedagem}*%0AData%20da%20Entrada:%20*${currentElement.dataEntrada}*%0AData%20da%20Saída:%20*${currentElement.dataSaida}*%0ALocal%20de%20Origem:%20*${currentElement.localOrigem}*%0AVeículo:%20*${currentElement.veiculoUsado}*%0AHorário%20de%20Entrada:%20*${currentElement.horaEntrada}Hrs*%0AHorário%20de%20Saída:%20*${currentElement.horaSaida}Hrs*%0ADAM:%20*${currentElement.DAM}*%0AProtocolo%20da%20Reserva:%20*${currentElement._id}*`}
										target="_blank"></a> */}
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
									<h2>Nº de Protocolo: </h2>
									<p>{currentElement.numeroReserva}</p>
								</div>
								<div className="div-unica-cadastro">
									<h2>Data de Criação: </h2>
									<p>{formattedDate}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export { ExibirCadastroUSER };
