import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";
import "./CriarCadastro.css";

function CriarCadastro() {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		empresaOnibus: "",
		placaOnibus: "",
		nomeMotorista: "",
		telefoneMotorista: "",
		nomeExcursionista: "",
		telefoneExcursionista: "",
		localHospedagem: "",
		dataEntrada: "",
		dataSaida: "",
		quantidadeDias: "",
		horaEntrada: "",
		horaSaida: "",
		localOrigem: "",
		localDestino: "",
		veiculoUsado: "",
		dam: "",
		pagamento: "NAO PAGO",
	});

	function clearFunction() {
		setForm({
			empresaOnibus: "",
			placaOnibus: "",
			nomeMotorista: "",
			telefoneMotorista: "",
			nomeExcursionista: "",
			telefoneExcursionista: "",
			localHospedagem: "",
			dataEntrada: "",
			dataSaida: "",
			quantidadeDias: "",
			horaEntrada: "",
			horaSaida: "",
			localOrigem: "",
			localDestino: "",
			veiculoUsado: "",
			dam: "",
			pagamento: "NAO PAGO",
		});
	}

	useEffect(() => {
		const dataEntradaCal = new Date(form.dataEntrada);
		const dataSaidaCal = new Date(form.dataSaida);

		if (form.dataEntrada !== "" && form.dataSaida !== "") {
			if (dataEntradaCal <= dataSaidaCal) {
				const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
				setForm({
					...form,
					quantidadeDias: Math.round(
						Math.abs((dataEntradaCal - dataSaidaCal) / umDiaEmMilissegundos),
					),
				});
			} else {
				window.alert("Erro: a data de saída é antes da data de entrada.");
			}
		}
	}, [form.dataEntrada, form.dataSaida]);

	const handleChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			await api.post("/cadastro", form);
			navigate("/exibir-cadastros");
		} catch (err) {
			console.log(`Erro do Front-end em CriarCadastro/handleSubmit: ${err}`);
			window.alert("Ops... Alguma coisa deu errada, tente rever os dados novamente.");
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<h1 style={{ marginBottom: "10px", color: "rgb(8, 96, 155)" }}>Formulário de Reserva</h1>

			<div className="div-unica-criarformulario">
				<label htmlFor="empresaOnibus">Nome da Empresa do Ônibus:</label>
				<input
					type="text"
					id="empresaOnibus"
					name="empresaOnibus"
					value={form.empresaOnibus}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="div-unica-criarformulario">
				<label htmlFor="placaOnibus">Placa do Ônibus:</label>
				<input
					type="text"
					id="placaOnibus"
					name="placaOnibus"
					value={form.placaOnibus}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="div-unica-criarformulario">
				<label htmlFor="nomeMotorista">Nome do Motorista:</label>
				<input
					type="text"
					id="nomeMotorista"
					name="nomeMotorista"
					value={form.nomeMotorista}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="div-unica-criarformulario">
				<label htmlFor="telefoneMotorista">Telefone do Motorista:</label>
				<input
					type="text"
					id="telefoneMotorista"
					name="telefoneMotorista"
					value={form.telefoneMotorista}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="div-unica-criarformulario">
				<label htmlFor="nomeExcursionista">Nome do Excursionista:</label>
				<input
					type="text"
					id="nomeExcursionista"
					name="nomeExcursionista"
					value={form.nomeExcursionista}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="div-unica-criarformulario">
				<label htmlFor="telefoneExcursionista">
					Telefone do Excursionista:
				</label>
				<input
					type="text"
					id="telefoneExcursionista"
					name="telefoneExcursionista"
					value={form.telefoneExcursionista}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="div-unica-criarformulario">
				<label htmlFor="localOrigem">Local de Origem:</label>
				<input
					type="text"
					id="localOrigem"
					name="localOrigem"
					value={form.localOrigem}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="div-unica-criarformulario">
				<label htmlFor="localDestino">Local de Destino:</label>
				<input
					type="text"
					id="localDestino"
					name="localDestino"
					value={form.localDestino}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="div-unica-criarformulario">
				<label htmlFor="horaEntrada">Hora de Entrada:</label>
				<input
					type="number"
					id="horaEntrada"
					name="horaEntrada"
					value={form.horaEntrada}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="div-unica-criarformulario">
				<label htmlFor="horaSaida">Hora de Saida:</label>
				<input
					type="number"
					id="horaSaida"
					name="horaSaida"
					value={form.horaSaida}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="div-unica-criarformulario">
				<label htmlFor="dataEntrada">Data de Entrada:</label>
				<input
					type="date"
					id="dataEntrada"
					name="dataEntrada"
					value={form.dataEntrada}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="div-unica-criarformulario">
				<label htmlFor="dataSaida">Data de Saída:</label>
				<input
					type="date"
					id="dataSaida"
					name="dataSaida"
					value={form.dataSaida}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="div-unica-criarformulario">
				<label htmlFor="localHospedagem">Hospedagem:</label>
				<input
					type="text"
					id="localHospedagem"
					name="localHospedagem"
					value={form.localHospedagem}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="div-unica-criarformulario">
				<label htmlFor="veiculoUsado">Selecione o Veículo:</label>
				<select
					type="select"
					id="veiculoUsado"
					name="veiculoUsado"
					value={form.veiculoUsado}
					onChange={handleChange}
					required>
					<option>... Selecione o Veículo ...</option>
					<option value="ONIBUS">Ônibus</option>
					<option value="VAN">Van</option>
					<option value="MINIVAN">Mini-Van</option>
				</select>
			</div>
			<div className="div-unica-criarformulario">
				<label htmlFor="dam">DAM: </label>
				<select
					id="dam"
					name="dam"
					value={form.dam}
					onChange={handleChange}
					required>
					<option>... Selecione ...</option>
					<option value="SIM">Sim</option>
					<option value="NAO">Não</option>
				</select>
			</div>
			<div className="div-unica-criarformulario">
				<label htmlFor="pagamento">Pagamento: </label>
				<select
					id="pagamento"
					name="pagamento"
					value={form.pagamento}
					disabled>
					<option value="">Pendente</option>
					<option value="">Efetuado</option>
				</select>
			</div>

			<div className="div-button">
				<button className="btn1" type="submit">
					Enviar
				</button>
				<button className="btn2" type="button" onClick={clearFunction}>
					Limpar
				</button>
			</div>
		</form>
	);
}

export { CriarCadastro };