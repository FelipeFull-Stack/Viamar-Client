import "./LogIn.css";
import { useNavigate } from "react-router-dom";

function LogIn() {
	const navigate = useNavigate();
	return (
		<>
			<body>
				<div class="container">
					<section id="content">
						<form action="">
							<h1>Log in</h1>
							<div>
								<input
									type="text"
									placeholder="Username"
									id="username"
								/>
							</div>
							<div>
								<input
									type="password"
									placeholder="Password"
									id="password"
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
