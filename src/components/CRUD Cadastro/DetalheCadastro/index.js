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
				const response = await api.get(`/cadastro/${params.id}`);
				setForm(response.data);
			} catch (err) {
				console.log(`Erro do Front-end em DetalheCadastro/fetchForm: ${err}`);
			}
		}
		fetchForm();
	}, []);

	return (
		<>
			<form style={{ position: "relative" }}>
				<h1>Cadastro</h1>
				<div className="div-unica">
					<p>Nº de Protocolo:</p>
					<p>{form._id}</p>
				</div>
				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="empresaOnibus">Nome da Empresa do Ônibus:</p>
						<p>{form.empresaOnibus}</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="placaOnibus">Placa do Ônibus:</p>
						<p>{form.placaOnibus}</p>
					</div>
				</div>

				<hr />

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="nomeMotorista">Nome do Motorista:</p>
						<p>{form.nomeMotorista}</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="telefoneMotorista">Telefone do Motorista:</p>
						<p>{form.telefoneMotorista}</p>
					</div>
				</div>

				<hr />

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="nomeExcursionista">Nome do Excursionista:</p>
						<p>{form.nomeExcursionista}</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="telefoneExcursionista">Telefone do Excursionista:</p>
						<p>{form.telefoneExcursionista}</p>
					</div>
				</div>

				<hr />

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="localOrigem">Local de Origem:</p>
						<p>{form.localOrigem}</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="localDestino">Local de Destino:</p>
						<p>{form.localDestino}</p>
					</div>
				</div>

				<hr />

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="horaEntrada">Hora de Entrada:</p>
						<p>{form.horaEntrada}</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="horaSaida">Hora de Saida:</p>
						<p>{form.horaSaida}</p>
					</div>
				</div>

				<hr />

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<p htmlFor="dataEntrada">Data de Entrada:</p>
						<p>{form.dataEntrada}</p>
					</div>
					<div className="div-unica-direita">
						<p htmlFor="dataSaida">Data de Saída:</p>
						<p>{form.dataSaida}</p>
					</div>
				</div>

				<hr />

				<div className="div-unica">
					<p htmlFor="localHospedagem">Hospedagem:</p>
					<p>{form.localHospedagem}</p>
				</div>

				<div className="div-unica">
					<p htmlFor="veiculoUsado">Selecione o Veículo:</p>
					<p>{form.veiculoUsado}</p>
				</div>

				<hr />

				<div className="div-button">
					<button
						className="btn1 button-cadastro"
						type="button"
						onClick={() => {
							navigate(`/editar-cadastro/${params.currentElement._id}`);
						}}>
						Editar
					</button>
					<button className="btn2 button-cadastro" type="button">
						Deletar
					</button>
				</div>
			</form>
		</>
	);
}

export { DetalheCadastro };
