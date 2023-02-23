import "./SignUp.css";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
	const navigate = useNavigate();

	const [form, setForm] = useState({
		email: "",
		password: "",
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
		}
	}

	return (
		<>
			<body>
				<div class="container">
					<section id="content">
						<form action="" onSubmit={handleSubmit}>
							<h1>Sign in</h1>
							<div>
								<input
									type="text"
									placeholder="Username"
									required
									id="username"
                                    onChange={handleChange}
								/>
							</div>
							<div>
								<input
									type="password"
									placeholder="Password"
									required
									id="password"
                                    onChange={handleChange}
								/>
							</div>
							<div>
								<input type="submit" value="Sign in" />
							</div>
						</form>
					</section>
				</div>
			</body>
		</>
	);
}

export { SignUp };
