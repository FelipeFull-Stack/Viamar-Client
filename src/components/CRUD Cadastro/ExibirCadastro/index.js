import "./ExibirCadastro.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api.js";

function ExibirCadastro() {
	const navigate = useNavigate();

	const [cadastros, setCadastros] = useState([]);
	const [pesquisados, setPesquisados] = useState([]);
	const [search, setSearch] = useState({
		inputPesquisaAdm: "",
	});

	useEffect(() => {
		async function fetchCadastros() {
			try {
				const response = await api.get("/cadastro/ADMIN");
				setCadastros(response.data);
			} catch (err) {
				console.log(`Erro do Front-end em ExibirCadastro: ${err}`);
				window.alert(
					"Ops... Alguma coisa deu errada no carregamento dos formulários, tente novamente mais tarde. ADM",
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

	const handleExportToExcel = async () => {
		try {
			const hasPermission = window.confirm(
				"Você deseja fazer o download dos dados em Excel?",
			);

			if (hasPermission) {
				const response = await api.get("/export-to-excel");
				const blob = new Blob([response.data], {
					type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
				});
				const url = window.URL.createObjectURL(blob);
				const link = document.createElement("a");
				link.href = url;
				link.setAttribute("download", "dados.xlsx");
				document.body.appendChild(link);
				link.click();
			} else {
				window.alert("Permissão de download de dados NEGADA pelo usuário.");
			}
		} catch (error) {
			console.error(error);
		}
	};

	const conteudos = pesquisados.length > 0 ? pesquisados : cadastros;

	return (
		//ADMIN
		<>
			<div className="div-geral-exibircadastros">
				<h1
					style={{ marginBottom: "20px", color: "rgb(8, 96, 155)" }}
					className="h1-personalizado">
					Lista de Reservas
					<button onClick={handleExportToExcel}>Exportar</button>
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
					/* const formattedDate = new Date(
						currentElement.createdAt,
					).toLocaleDateString("pt-BR"); */

					let pag = "";
					if (currentElement.pagamento === "PAGO") {
						pag = "Efetuado";
					} else {
						pag = "Pendente";
					}
					return (
						<div
							key={currentElement._id}
							className="div-map-cadastros"
							style={{
								backgroundColor:
									currentElement.numeroReserva % 2 === 0
										? "rgb(108,196,255)"
										: "rgb(228,242,255)",
							}}>
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
									<p>{pag}</p>
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
