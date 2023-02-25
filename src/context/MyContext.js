import { createContext, useState } from "react";

const MyContext = createContext();

function MyContextComponent(props) {
	const [adm, setAdm] = useState(false);
	const [pagamentoColor, setPagamentoColor] = useState({
		color: "",
	});

	return (
		<MyContext.Provider
			value={{ adm, setAdm, pagamentoColor, setPagamentoColor }}>
			{props.children}
		</MyContext.Provider>
	);
}

export { MyContext, MyContextComponent };
