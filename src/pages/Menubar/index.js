import "./Menubar.css";
import { useNavigate } from "react-router-dom";

function Menubar() {
	const navigate = useNavigate();
	return (
		<>
			<div className="div-geral-menubar">
				<div className="div-logo">
					<h1>Logo Aqui</h1>
				</div>
				<div className="div-todos-buttons">
					<div>
						<button
							onClick={() => {
								navigate("/cadastrar");
							}}>
							Cadastrar
						</button>
					</div>
					<div>
						<button
							onClick={() => {
								navigate("/cadastrar");
							}}>
							Cadastrar
						</button>
					</div>
					<div>
						<button
							onClick={() => {
								navigate("/cadastrar");
							}}>
							Cadastrar
						</button>
					</div>
					<div>
						<button
							onClick={() => {
								navigate("/cadastrar");
							}}>
							Cadastrar
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export { Menubar };
