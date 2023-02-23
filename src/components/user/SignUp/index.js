import "./SignUp.css";
import { api } from "../../../api/api";

function SignUp() {
	return (
		<>
			<body>
				<div class="container">
					<section id="content">
						<form action="">
							<h1>Sign in</h1>
							<div>
								<input
									type="text"
									placeholder="Username"
									required
									id="username"
								/>
							</div>
							<div>
								<input
									type="password"
									placeholder="Password"
									required
									id="password"
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
