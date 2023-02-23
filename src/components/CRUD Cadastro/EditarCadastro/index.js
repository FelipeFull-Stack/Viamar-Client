import React, { useState } from "react";
import "./EditarCadastro.css";

function EditarCadastro() {
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
		});
	}

	// useEffect(() => {
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
	// }, [form.dataEntrada, form.dataSaida]);

	const handleChange = (event) => {
		setForm({ ...form, [event.target.name]: [event.target.value] });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(form);
	};

	return (
		<>
			<form onSubmit={handleSubmit} style={{ position: "relative" }}>
				<h1>Cadastro</h1>
				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<label htmlFor="empresaOnibus">Nome da Empresa do Ônibus:</label>
						<input
							type="text"
							id="empresaOnibus"
							name="empresaOnibus"
							value={form.empresaOnibus}
							onChange={handleChange}
						/>
					</div>
					<div className="div-unica-direita">
						<label htmlFor="placaOnibus">Placa do Ônibus:</label>
						<input
							type="text"
							id="placaOnibus"
							name="placaOnibus"
							value={form.placaOnibus}
							onChange={handleChange}
						/>
					</div>
				</div>

				<hr />

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<label htmlFor="nomeMotorista">Nome do Motorista:</label>
						<input
							type="text"
							id="nomeMotorista"
							name="nomeMotorista"
							value={form.nomeMotorista}
							onChange={handleChange}
						/>
					</div>
					<div className="div-unica-direita">
						<label htmlFor="telefoneMotorista">Telefone do Motorista:</label>
						<input
							type="text"
							id="telefoneMotorista"
							name="telefoneMotorista"
							value={form.telefoneMotorista}
							onChange={handleChange}
						/>
					</div>
				</div>

				<hr />

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<label htmlFor="nomeExcursionista">Nome do Excursionista:</label>
						<input
							type="text"
							id="nomeExcursionista"
							name="nomeExcursionista"
							value={form.nomeExcursionista}
							onChange={handleChange}
						/>
					</div>
					<div className="div-unica-direita">
						<label htmlFor="telefoneExcursionista">
							Telefone do Excursionista:
						</label>
						<input
							type="text"
							id="telefoneExcursionista"
							name="telefoneExcursionista"
							value={form.telefoneExcursionista}
							onChange={handleChange}
						/>
					</div>
				</div>

				<hr />

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<label htmlFor="localOrigem">Local de Origem:</label>
						<input
							type="text"
							id="localOrigem"
							name="localOrigem"
							value={form.localOrigem}
							onChange={handleChange}
						/>
					</div>
					<div className="div-unica-direita">
						<label htmlFor="localDestino">Local de Destino:</label>
						<input
							type="text"
							id="localDestino"
							name="localDestino"
							value={form.localDestino}
							onChange={handleChange}
						/>
					</div>
				</div>

				<hr />

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<label htmlFor="horaEntrada">Hora de Entrada:</label>
						<input
							type="number"
							id="horaEntrada"
							name="horaEntrada"
							value={form.horaEntrada}
							onChange={handleChange}
						/>
					</div>
					<div className="div-unica-direita">
						<label htmlFor="horaSaida">Hora de Saida:</label>
						<input
							type="number"
							id="horaSaida"
							name="horaSaida"
							value={form.horaSaida}
							onChange={handleChange}
						/>
					</div>
				</div>

				<hr />

				<div className="div-dupla">
					<div className="div-unica-esquerda">
						<label htmlFor="dataEntrada">Data de Entrada:</label>
						<input
							type="date"
							id="dataEntrada"
							name="dataEntrada"
							value={form.dataEntrada}
							onChange={handleChange}
						/>
					</div>
					<div className="div-unica-direita">
						<label htmlFor="dataSaida">Data de Saída:</label>
						<input
							type="date"
							id="dataSaida"
							name="dataSaida"
							value={form.dataSaida}
							onChange={handleChange}
						/>
					</div>
				</div>

				<hr />

				<div className="div-unica">
					<label htmlFor="localHospedagem">Hospedagem:</label>
					<input
						type="text"
						id="localHospedagem"
						name="localHospedagem"
						value={form.localHospedagem}
						onChange={handleChange}
					/>
				</div>

				<div className="div-unica">
					<label htmlFor="veiculoUsado">Selecione o Veículo:</label>
					<select
						type="select"
						id="veiculoUsado"
						name="veiculoUsado"
						value={form.veiculoUsado}
						onChange={handleChange}>
						<option>... Selecione o Veículo ...</option>
						<option value="ONIBUS">Ônibus</option>
						<option value="VAN">Van</option>
						<option value="MINIVAN">Mini-Van</option>
					</select>
				</div>

				<hr />

				<div className="div-button">
					<button className="btn1 button-cadastro" type="submit">
						Enviar
					</button>
					<button
						className="btn2 button-cadastro"
						type="button"
						onClick={clearFunction}>
						Limpar
					</button>
				</div>
			</form>
		</>
	);
}

export { EditarCadastro };
