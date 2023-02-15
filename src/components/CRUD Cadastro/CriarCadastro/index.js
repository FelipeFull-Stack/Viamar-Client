import style from "./style.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";

function CriarCadastro() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await api.post("/user/cadastro", form);
            navigate("/entrar");
        } catch (err) {
            console.log(`Erro do Front-end em SingUp: ${err}`);
        }
    };

    return (
        <>
            <form>
                <div className="">
                    <h1>Cadastro</h1>
                </div>
            </form>
        </>
    );
};

export { CriarCadastro };