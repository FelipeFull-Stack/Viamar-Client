import "./DetalheCadastro.css";
import { api } from "../../../api/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DetalheCadastro() {
	const navigate = useNavigate();
	const params = useParams();
	console.log(params);
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

	const formattedDate1 = new Date(form.dataEntrada).toLocaleDateString("pt-BR");
	const formattedDate2 = new Date(form.dataSaida).toLocaleDateString("pt-BR");
	const formattedDate3 = new Date(form.createdAt).toLocaleDateString("pt-BR");

	async function handleDelete() {
		try {
			await api.delete(`/cadastro/${params.id}`);
			navigate("/exibir-cadastros");
		} catch (err) {
			console.log(`Erro do Back-end em DetalheCadastro/handleDelete: ${err}`);
		}
	}

	return (
		<>
			<form style={{ position: "relative" }}>
				<h1 style={{ marginBottom: "10px" }}>Reserva</h1>
				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p>Nº de Protocolo:</p>
						<p className="paragrafo-test">{form._id}</p>
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
						<p htmlFor="horaEntrada">Hora de Entrada:</p>
						<p className="paragrafo-test">{form.horaEntrada} horas</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="horaSaida">Hora de Saida:</p>
						<p className="paragrafo-test">{form.horaSaida} horas</p>
					</div>
				</div>

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="dataEntrada">Data de Entrada:</p>
						<p className="paragrafo-test">{formattedDate1}</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="dataSaida">Data de Saída:</p>
						<p className="paragrafo-test">{formattedDate2}</p>
					</div>
				</div>

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="localHospedagem">Hospedagem:</p>
						<p className="paragrafo-test">{form.localHospedagem}</p>
					</div>

					<div className="div-unica-direita">
						<p htmlFor="veiculoUsado">Selecione o Veículo:</p>
						<p className="paragrafo-test">{form.veiculoUsado}</p>
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
					<button className="btn3" type="button" onClick={handleDelete}>
						Deletar
					</button>
				</div>
			</form>
		</>
	);
}

export { DetalheCadastro };
