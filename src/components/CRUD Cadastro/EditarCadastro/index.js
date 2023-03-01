import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import "./EditarCadastro.css";

function EditarCadastro() {
	const navigate = useNavigate();
	const params = useParams();
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
		pagamento: "",
		color: "",
		habilitado: "",
	});

	useEffect(() => {
		async function fetchCadastros() {
			try {
				const response = await api.get(`/cadastro/ADMIN/${params.id}`);
				setForm(response.data);
			} catch (err) {
				console.log(
					`Erro do Front-end em EditarCadastro/fecthCadastro: ${err} `,
				);
			}
		}
		fetchCadastros();
	}, []);

	useEffect(() => {
		if (form.pagamento === "PAGO") {
			setForm({ ...form, color: "green", habilitado: true });
		} else if (form.pagamento === "NAO PAGO") {
			setForm({ ...form, color: "red", habilitado: false  });
		}
	}, [form.pagamento]);

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
			pagamento: "",
			habilitado: "",
		});
	}

	const handleChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			await api.put(`/cadastro/ADMIN/${params.id}`, {
				empresaOnibus: form.empresaOnibus,
				placaOnibus: form.placaOnibus,
				nomeMotorista: form.nomeMotorista,
				telefoneMotorista: form.telefoneMotorista,
				nomeExcursionista: form.nomeExcursionista,
				telefoneExcursionista: form.telefoneExcursionista,
				localHospedagem: form.localHospedagem,
				dataEntrada: form.dataEntrada,
				dataSaida: form.dataSaida,
				quantidadeDias: form.quantidadeDias,
				horaEntrada: form.horaEntrada,
				horaSaida: form.horaSaida,
				localOrigem: form.localOrigem,
				localDestino: form.localDestino,
				veiculoUsado: form.veiculoUsado,
				dam: form.dam,
				pagamento: form.pagamento,
				color: form.color,
				habilitado: form.habilitado,
			});
			navigate("/exibir-cadastros/");
		} catch (err) {
			console.log(`Erro do Front-end em CriarCadastro/handleSubmit: ${err}`);
		}
	}

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

	const formattedDateEntrada = new Date(form.dataEntrada).toLocaleDateString(
		"pt-BR",
	);
	const formattedDateSaida = new Date(form.dataSaida).toLocaleDateString(
		"pt-BR",
	);

	return (
		<>
			<form onSubmit={handleSubmit} style={{ position: "relative" }}>
				<h1 style={{ marginBottom: "10px" }}>Editando Reserva</h1>

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
					<label style={{ fontWeight: 500 }}>{form.horaEntrada}:00 Hrs</label>
				</div>
				<div className="div-unica-criarformulario">
					<label htmlFor="horaSaida">Hora de Saida:</label>
					<label style={{ fontWeight: 500 }}>{form.horaSaida}:00 Hrs</label>
				</div>

				<div className="div-unica-criarformulario">
					<label htmlFor="dataEntrada">Data de Entrada:</label>
					<label style={{ fontWeight: 500 }}>{formattedDateEntrada}</label>
				</div>
				<div className="div-unica-criarformulario">
					<label htmlFor="dataSaida">Data de Saída:</label>
					<label style={{ fontWeight: 500 }}>{formattedDateSaida}</label>
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
					<label htmlFor="dam">DAM:</label>
					<select
						id="dam"
						name="dam"
						value={form.dam}
						onChange={handleChange}
						disabled>
						<option value="SIM">Sim</option>
						<option value="NAO">Não</option>
					</select>
				</div>

				<div className="div-unica-criarformulario">
					<label htmlFor="pagamento">Pagamento:</label>
					<select
						id="pagamento"
						name="pagamento"
						value={form.pagamento}
						onChange={handleChange}
						required>
						<option value="NAO PAGO">Pendente</option>
						<option value="PAGO">Efetuado</option>
					</select>
				</div>

				<div className="div-button">
					<button className="btn1 button-cadastro" type="submit">
						Enviar
					</button>
					<button
						className="btn2 button-cadastro"
						type="button"
						onClick={() => {
							navigate("/exibir-cadastros");
						}}>
						Voltar
					</button>
					<button
						className="btn3 button-cadastro"
						type="button"
						onClick={handleDeleteClick}>
						Deletar
					</button>
				</div>
			</form>
		</>
	);
}

export { EditarCadastro };
