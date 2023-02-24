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
				const response = await api.get(`/cadastro/${params._id}`);
				setForm(response.data);
			} catch (err) {
				console.log(`Erro do Front-end em DetalheCadastro: ${err}`);
			}
		}
		fetchForm();
	}, []);

	return (
		<>
			{form.map((currentElement) => {
				return (
					<>
						<form style={{ position: "relative" }}>
							<h1>Cadastro</h1>
							<div className="div-dupla">
								<div className="div-unica-esquerda">
									<p htmlFor="empresaOnibus">Nome da Empresa do Ônibus:</p>
									<p>{currentElement.empresaOnibus}</p>
								</div>
								<div className="div-unica-direita">
									<p htmlFor="placaOnibus">Placa do Ônibus:</p>
									<p>{currentElement.placaOnibus}</p>
								</div>
							</div>

							<hr />

							<div className="div-dupla">
								<div className="div-unica-esquerda">
									<p htmlFor="nomeMotorista">Nome do Motorista:</p>
									<p>{currentElement.nomeMotorista}</p>
								</div>
								<div className="div-unica-direita">
									<p htmlFor="telefoneMotorista">Telefone do Motorista:</p>
									<p>{currentElement.telefoneMotorista}</p>
								</div>
							</div>

							<hr />

							<div className="div-dupla">
								<div className="div-unica-esquerda">
									<p htmlFor="nomeExcursionista">Nome do Excursionista:</p>
									<p>{currentElement.nomeExcursionista}</p>
								</div>
								<div className="div-unica-direita">
									<p htmlFor="telefoneExcursionista">
										Telefone do Excursionista:
									</p>
									<p>{currentElement.telefoneExcursionista}</p>
								</div>
							</div>

							<hr />

							<div className="div-dupla">
								<div className="div-unica-esquerda">
									<p htmlFor="localOrigem">Local de Origem:</p>
									<p>{currentElement.localOrigem}</p>
								</div>
								<div className="div-unica-direita">
									<p htmlFor="localDestino">Local de Destino:</p>
									<p>{currentElement.localDestino}</p>
								</div>
							</div>

							<hr />

							<div className="div-dupla">
								<div className="div-unica-esquerda">
									<p htmlFor="horaEntrada">Hora de Entrada:</p>
									<p>{currentElement.horaEntrada}</p>
								</div>
								<div className="div-unica-direita">
									<p htmlFor="horaSaida">Hora de Saida:</p>
									<p>{currentElement.horaSaida}</p>
								</div>
							</div>

							<hr />

							<div className="div-dupla">
								<div className="div-unica-esquerda">
									<p htmlFor="dataEntrada">Data de Entrada:</p>
									<p>{currentElement.dataEntrada}</p>
								</div>
								<div className="div-unica-direita">
									<p htmlFor="dataSaida">Data de Saída:</p>
									<p>{currentElement.dataSaida}</p>
								</div>
							</div>

							<hr />

							<div className="div-unica">
								<p htmlFor="localHospedagem">Hospedagem:</p>
								<p>{currentElement.localHospedagem}</p>
							</div>

							<div className="div-unica">
								<p htmlFor="veiculoUsado">Selecione o Veículo:</p>
								<p>{currentElement.veiculoUsado}</p>
							</div>

							<hr />

							<div className="div-button">
								<button className="btn1 button-cadastro" type="button" onClick={() => {navigate("/edit")}}>
									Editar
								</button>
								<button className="btn2 button-cadastro" type="button">
									Deletar
								</button>
							</div>
						</form>
					</>
				);
			})}
		</>
	);
}

export { DetalheCadastro };
