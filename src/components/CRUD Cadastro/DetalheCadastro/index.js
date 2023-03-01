import "./DetalheCadastro.css";
import { api } from "../../../api/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DetalheCadastro() {
	const navigate = useNavigate();
	const params = useParams();
	const [form, setForm] = useState({});

	useEffect(() => {
		async function fetchForm() {
			try {
				const response = await api.get(`/cadastro/ADMIN/${params.id}`);
				setForm(response.data);
			} catch (err) {
				console.log(`Erro do Front-end em DetalheCadastro/fetchForm: ${err}`);
			}
		}
		fetchForm();
	}, [params.id]);


	const formattedDateEntrada = new Date(form.dataEntrada).toLocaleDateString(
		"pt-BR",
	);
	const formattedDateSaida = new Date(form.dataSaida).toLocaleDateString(
		"pt-BR",
	);
	const formattedDate3 = new Date(form.createdAt).toLocaleDateString("pt-BR");

	function handleDeleteClick() {
		const confirmDelete = window.confirm(
			"Tem certeza que deseja deletar este item?",
		);
		if (confirmDelete) {
			async function handleDelete() {
				try {
					await api.delete(`/cadastro/ADMIN/${params.id}`);
					navigate("/exibir-cadastros");
				} catch (err) {
					console.log(
						`Erro do Back-end em DetalheCadastro/handleDelete: ${err}`,
					);
				}
			}
			handleDelete();
		}
	}

	return (
		<>
			<form style={{ position: "relative" }}>
				<h1 style={{ marginBottom: "10px" }}>Reserva</h1>
				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p>Nº de Protocolo:</p>
						<p className="paragrafo-test">{form.numeroReserva}</p>
					</div>
					<div className="div-unica-direita">
						<p>Criado em:</p>
						<p className="paragrafo-test">{formattedDate3}</p>
					</div>
				</div>
				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="empresaOnibus">Nome da Empresa do Ônibus:</p>
						<p className="paragrafo-test">{form.empresaOnibus}</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="placaOnibus">Placa do Ônibus:</p>
						<p className="paragrafo-test">{form.placaOnibus}</p>
					</div>
				</div>

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="nomeMotorista">Nome do Motorista:</p>
						<p className="paragrafo-test">{form.nomeMotorista}</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="telefoneMotorista">Telefone do Motorista:</p>
						<p className="paragrafo-test">{form.telefoneMotorista}</p>
					</div>
				</div>

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="nomeExcursionista">Nome do Excursionista:</p>
						<p className="paragrafo-test">{form.nomeExcursionista}</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="telefoneExcursionista">Telefone do Excursionista:</p>
						<p className="paragrafo-test">{form.telefoneExcursionista}</p>
					</div>
				</div>

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="localOrigem">Local de Origem:</p>
						<p className="paragrafo-test">{form.localOrigem}</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="localDestino">Local de Destino:</p>
						<p className="paragrafo-test">{form.localDestino}</p>
					</div>
				</div>

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="horaEntrada">Horário de Entrada:</p>
						<p className="paragrafo-test">{form.horaEntrada} horas</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="horaSaida">Horário de Saída:</p>
						<p className="paragrafo-test">{form.horaSaida} horas</p>
					</div>
				</div>

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="dataEntrada">Data de Entrada:</p>
						<p className="paragrafo-test">{formattedDateEntrada}</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="dataSaida">Data de Saída:</p>
						<p className="paragrafo-test">{formattedDateSaida}</p>
					</div>
				</div>

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="localHospedagem">Hospedagem:</p>
						<p className="paragrafo-test">{form.localHospedagem}</p>
					</div>

					<div className="div-unica-direita">
						<p htmlFor="veiculoUsado">Veículo:</p>
						<p className="paragrafo-test">{(form.veiculoUsado === "ONIBUS" ? "Ônibus" : form.veiculoUsado === "VAN" ? "Van" : "Mini-Van")}</p>
					</div>
				</div>

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="localHospedagem">Pagamento:</p>
						<p className="paragrafo-test">{(form.pagamento === "PAGO" ? "Efetuado" : "Pendente")}</p>
					</div>

					<div className="div-unica-direita">
						<p htmlFor="veiculoUsado">DAM:</p>
						<p className="paragrafo-test">{(form.dam === "SIM" ? "Sim" : "Não")}</p>
					</div>
				</div>

				<div className="div-button">
					<button
						className="btn1"
						type="button"
						onClick={() => {
							navigate(`/editar-cadastro/${params.id}`);
						}}>
						Editar
					</button>
					<button
						className="btn2"
						type="button"
						onClick={() => {
							navigate("/exibir-cadastros")
						}}
					>
						Voltar
					</button>
					<button className="btn3" type="button" onClick={handleDeleteClick}>
						Deletar
					</button>
				</div>
			</form>
		</>
	);
}

export { DetalheCadastro };
