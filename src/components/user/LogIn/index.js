import "./LogIn.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { api } from "../../../api/api";

function LogIn() {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

	console.log(loggedInUser);

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const response = await api.post("/user/login", form);
			setLoggedInUser(response.data);
			localStorage.setItem("loggedInUser", JSON.stringify(response.data));
			navigate("/exibir-cadastros");
		} catch (err) {
			console.log(`Erro do Front-end em LogIn(handleSubmit): ${err}`);
		}
	}
	return (
		<>
			<body>
				<div class="container">
					<section id="content">
						<form action="" onSubmit={handleSubmit}>
							<h1>Log in</h1>
							<div>
								<input
									type="text"
									placeholder="Username"
									id="username"
									name="email"
									value={form.email}
									onChange={handleChange}
									style={{textAlign: "justify"}}
								/>
							</div>
							<div>
								<input
									type="password"
									placeholder="Password"
									id="password"
									name="password"
									value={form.password}
									onChange={handleChange}
									style={{textAlign: "justify"}}
								/>
							</div>
							<div>
								<input type="submit" value="Log in" />
								<input
									type="button"
									value="Sign Up"
									onClick={() => {
										navigate("/signup");
									}}
								/>
							</div>
						</form>
					</section>
				</div>
			</body>
		</>
	);
}

export { LogIn };
