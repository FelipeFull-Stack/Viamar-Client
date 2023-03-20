import "./SignUp.css";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
	const navigate = useNavigate();

	const [form, setForm] = useState({
		email: "",
		password: "",
		nomeUsuario: "",
		empresaUsuario: "",
		telefoneUsuario: "",
		cidadeUsuario: "",
		idSequenciado: "",
	});

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			await api.post("/user/signup", form);
			navigate("/login");
		} catch (err) {
			console.log(`Erro do Front-end em SingUp: ${err}`);
			window.alert("Ops... Acho que você digitou alguma coisa errada! Porfavor, reveja seu cadastro.");
		}
	}

	return (
		<>
			<div className="div-login-centralizado" id="login">
				<body>
					<div className="container">
						<section id="content">
							<form action="" onSubmit={handleSubmit}>
								<h1>Cadastro</h1>

								<div>
									<input
										type="text"
										placeholder="Nome"
										required
										id="nomeUsuario"
										name="nomeUsuario"
										value={form.nomeUsuario}
										onChange={handleChange}
									/>
								</div>
								<div>
									<input
										type="text"
										placeholder="Nome da Empresa"
										required
										id="empresaUsuario"
										name="empresaUsuario"
										value={form.empresaUsuario}
										onChange={handleChange}
									/>
								</div>
								<div>
									<input
										type="text"
										placeholder="Telefone da Empresa"
										required
										id="telefoneUsuario"
										name="telefoneUsuario"
										value={form.telefoneUsuario}
										onChange={handleChange}
									/>
								</div>
								<div>
									<input
										type="text"
										placeholder="Cidade"
										required
										id="cidadeUsuario"
										name="cidadeUsuario"
										value={form.cidadeUsuario}
										onChange={handleChange}
									/>
								</div>
								<div>
									<input
										type="text"
										placeholder="E-mail"
										required
										id="username"
										name="email"
										value={form.email}
										onChange={handleChange}
									/>
								</div>
								<div>
									<input
										type="password"
										placeholder="Senha Ex: @Senha123"
										required
										id="password"
										name="password"
										value={form.password}
										onChange={handleChange}
									/>
								</div>
								<div>
									<input type="submit" value="Cadastro" />
								</div>
							</form>
						</section>
					</div>
				</body>
			</div>
		</>
	);
}

export { SignUp };
