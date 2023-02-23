import "./Menubar.css";
import { useNavigate } from "react-router-dom";

function Menubar() {
	const navigate = useNavigate();
	return (
		<>
			<div className="div-geral-menubar">
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
		</>
	);
}

export { Menubar };
