import "./ExibirCadastroUSER.css";
import { useEffect, useState } from "react";
import { api } from "../../../api/api.js";

function ExibirCadastroUSER() {
	const [cadastros, setCadastros] = useState([]);
	const [pesquisados, setPesquisados] = useState([]);
	const [search, setSearch] = useState({
		inputPesquisaAdm: "",
	});
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
				window.alert(
					"Ops... Alguma coisa deu errada no carregamento dos formulários, tente novamente mais tarde. USER",
				);
			}
		}
		fetchCadastros();
	}, []);

	function handleChange(event) {
		setSearch({ ...search, [event.target.name]: event.target.value });
	}

	function handleClickSearch() {
		if (search.inputPesquisaAdm === "") {
			setPesquisados([]);
		} else {
			setPesquisados(
				cadastros.filter((currentElement) => {
					return (
						String(currentElement.nomeMotorista)
							.toLowerCase()
							.includes(search.inputPesquisaAdm.toLowerCase()) ||
						String(currentElement.nomeExcursionista)
							.toLowerCase()
							.includes(search.inputPesquisaAdm.toLowerCase()) ||
						String(currentElement.numeroReserva)
							.toLowerCase()
							.includes(search.inputPesquisaAdm.toLowerCase())
					);
				}),
			);
		}
	}

	const conteudos = pesquisados.length > 0 ? pesquisados : cadastros;

	return (
		//USER
		<>
			<div className="div-geral-exibircadastros">
				<h1
					style={{ marginBottom: "20px", color: "rgb(8, 96, 155)" }}
					className="h1-personalizado">
					Lista de Reservas
				</h1>
				<div className="div-pesquisar-cadastros-ADM">
					<input
						className="input-pesquisar-cadastros-ADM"
						id="inputPesquisaAdm"
						name="inputPesquisaAdm"
						value={search.inputPesquisaAdm}
						onChange={handleChange}
					/>
					<button
						className="button-pesquisar-cadastros-ADM"
						onClick={handleClickSearch}>
						Pesquisar
					</button>
				</div>
				{conteudos.reverse().map((currentElement) => {
					const formattedDate = new Date(
						currentElement.createdAt,
					).toLocaleDateString("pt-BR");
					const formattedDateEntrada = new Date(
						currentElement.dataEntrada,
					).toLocaleDateString("pt-BR");
					const formattedDateSaida = new Date(
						currentElement.dataSaida,
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
											`https://wa.me/5522998200724?text=*Olá%20Estacionamento%20ViaMar*%0AQuero%20*PAGAR*%20esta%20*RESERVA*%0AEmpresa%20de%20Ônibus:%20*${currentElement.empresaOnibus}*%0APlaca:%20*${currentElement.placaOnibus}*%0AMotorista%20e%20Telefone:%20*${currentElement.nomeMotorista}%20-%20${currentElement.telefoneMotorista}*%0AExcursionista%20e%20Telefone:%20*${currentElement.nomeExcursionista}%20-%20${currentElement.telefoneExcursionista}*%0AHospedagem:%20*${currentElement.localHospedagem}*%0AData%20da%20Entrada:%20*${formattedDateEntrada}*%0AData%20da%20Saída:%20*${formattedDateSaida}*%0ALocal%20de%20Origem:%20*${currentElement.localOrigem}*%0AVeículo:%20*${currentElement.veiculoUsado}*%0AHorário%20de%20Entrada:%20*${currentElement.horaEntrada}hrs*%0AHorário%20de%20Saída:%20*${currentElement.horaSaida}hrs*%0ADAM:%20*${currentElement.dam}*%0AProtocolo%20da%20Reserva:%20*${currentElement.numeroReserva}*`,
										);
									}}>
									{currentElement.pagamento === "PAGO" ? "Pago" : "Pagar"}
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
