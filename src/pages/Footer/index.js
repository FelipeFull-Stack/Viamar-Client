import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
	const navigate = useNavigate();

	return (
		<>
			<div className="footer">
				<p>
					© VIAMAR • Built with <b>Luiz Felipe Soares Lopes</b> - Developer
				</p>
			</div>
		</>
	);
}

export { Footer };
