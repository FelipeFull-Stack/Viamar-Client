import "./Menubar.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import menu from "../../images/menuhamburguer.png";

function Menubar() {
	const navigate = useNavigate();
	const [isExpanded, setIsExpanded] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsExpanded(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return (
		<>
			<div className="div-geral-menubar">
				<div className="div-logo">
					<h1>Logo Aqui</h1>
				</div>

				<ul className="div-todos-buttons">
					<li>
						<button
							onClick={() => {
								navigate("/cadastro");
							}}>
							Cadastrar
						</button>
					</li>
					{/* <li>
						<button
							onClick={() => {
								navigate("/edit-cadastro");
							}}>
							Editar Cadastro
						</button>
					</li> */}
					<li>
						<button
							onClick={() => {
								navigate("/exibir-cadastro");
							}}>
							Exibir Cadastros
						</button>
					</li>
					<li>
						<button
							onClick={() => {
								navigate("/cadastrar");
							}}>
							Cadastrar
						</button>
					</li>
				</ul>
			</div>

			{/* Divisória entre Divs por Responsividade */}
			{/* Divisória entre Divs por Responsividade */}
			{/* Divisória entre Divs por Responsividade */}
			{/* Divisória entre Divs por Responsividade */}
			{/* Divisória entre Divs por Responsividade */}

			<div className="div-central-menu">
				<div>
					<h1>Logo Aqui</h1>
				</div>
				<div className="div-hamburguer">
					<button
						className="button-menu-hamburguer"
						onClick={() => setIsExpanded(!isExpanded)}>
						<img src={menu} alt="Menu" />
						<b>Menu</b>
					</button>
					{isExpanded && (
						<div className="buttons" ref={ref}>
							<button
								onClick={() => {
									navigate("/cadastro");
								}}>
								Cadastro
							</button>
							{/* <button
								onClick={() => {
									navigate("/edit-cadastro");
								}}>
								Editar Cadastro
							</button> */}
							<button
								onClick={() => {
									navigate("/cadastro");
								}}>
								botão 3
							</button>
							<button
								onClick={() => {
									navigate("/cadastro");
								}}>
								botão 4
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export { Menubar };
