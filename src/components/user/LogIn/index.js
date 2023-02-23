import "./LogIn.css";

function LogIn() {
	return (
		<>
			<body>
				<div class="container">
					<section id="content">
						<form action="">
							<h1>Login</h1>
							<div>
								<input
									type="text"
									placeholder="Username"
									required=""
									id="username"
								/>
							</div>
							<div>
								<input
									type="password"
									placeholder="Password"
									required=""
									id="password"
								/>
							</div>
							<div>
								<input type="submit" value="Log in" />
							</div>
						</form>
					</section>
				</div>
			</body>
		</>
	);
}

export { LogIn };
