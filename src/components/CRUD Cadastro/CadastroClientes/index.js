import React, { useState, useEffect } from 'react';
import styles from './CadastroClientes.module.css';

function CadastroClientes() {
    const [form, setForm] = useState({
        empresaOnibus: '',
        placaOnibus: '',
        nomeMotorista: '',
        telefoneMotorista: '',
        nomeExcursionista: '',
        telefoneExcursionista: '',
        localHospedagem: '',
        dataEntrada: '',
        dataSaida: '',
        quantidadeDias: '',
        horaEntrada: '',
        horaSaida: '',
        localOrigem: '',
        localDestino: '',
        veiculoUsado: ''
    });

    useEffect(() => {
        const dataEntradaCal = new Date(form.dataEntrada);
        const dataSaidaCal = new Date(form.dataSaida);

        if (form.dataEntrada !== '' && form.dataSaida !== '') {
            if (dataEntradaCal <= dataSaidaCal) {
                const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
                setForm({
                    ...form,
                    quantidadeDias: Math.round(Math.abs((dataEntradaCal - dataSaidaCal) / umDiaEmMilissegundos))
                });

                console.log(`A quantidade em dias é: ${form.quantidadeDias}`)
            } else {
                window.alert('Erro: a data de saída é antes da data de entrada.');
            }
        }
    }, [form.dataEntrada, form.dataSaida]);

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: [event.target.value] });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Cadastro</h1>
            <div className={styles.progress}></div>
            <label htmlFor="empresaOnibus">Nome da Empresa do Ônibus:</label>
            <input
                type="text"
                id="empresaOnibus"
                name="empresaOnibus"
                value={form.empresaOnibus}
                onChange={handleChange}
            />

            <label htmlFor="placaOnibus">Placa do Ônibus:</label>
            <input
                type="text"
                id="placaOnibus"
                name="placaOnibus"
                value={form.placaOnibus}
                onChange={handleChange}
            />

            <label htmlFor="nomeMotorista">Nome do Motorista:</label>
            <input
                type="text"
                id="nomeMotorista"
                name="nomeMotorista"
                value={form.nomeMotorista}
                onChange={handleChange}
            />

            <label htmlFor="telefoneMotorista">Telefone do Motorista:</label>
            <input
                type="text"
                id="telefoneMotorista"
                name="telefoneMotorista"
                value={form.telefoneMotorista}
                onChange={handleChange}
            />

            <label htmlFor="nomeExcursionista">Nome do Excursionista:</label>
            <input
                type="text"
                id="nomeExcursionista"
                name="nomeExcursionista"
                value={form.nomeExcursionista}
                onChange={handleChange}
            />

            <label htmlFor="telefoneExcursionista">Telefone do Excursionista:</label>
            <input
                type="text"
                id="telefoneExcursionista"
                name="telefoneExcursionista"
                value={form.telefoneExcursionista}
                onChange={handleChange}
            />

            <label htmlFor="localHospedagem">Local de Hospedagem:</label>
            <input
                type="text"
                id="localHospedagem"
                name="localHospedagem"
                value={form.localHospedagem}
                onChange={handleChange}
            />
            <label htmlFor="dataEntrada">Data de Entrada:</label>
            <input
                type="date"
                id="dataEntrada"
                name="dataEntrada"
                value={form.dataEntrada}
                onChange={handleChange}
            />
            <label htmlFor="dataSaida">Data de Saída:</label>
            <input
                type="date"
                id="dataSaida"
                name="dataSaida"
                value={form.dataSaida}
                onChange={handleChange}
            />
            <label htmlFor="horaEntrada">Hora de Entrada:</label>
            <input
                type="number"
                id="horaEntrada"
                name="horaEntrada"
                value={form.horaEntrada}
                onChange={handleChange}
            />
            <label htmlFor="horaSaida">Hora de Saida:</label>
            <input
                type="number"
                id="horaSaida"
                name="horaSaida"
                value={form.horaSaida}
                onChange={handleChange}
            />
            <label htmlFor="localOrigem">Local de Origem:</label>
            <input
                type="text"
                id="localOrigem"
                name="localOrigem"
                value={form.localOrigem}
                onChange={handleChange}
            />
            <label htmlFor="localDestino">Local de Destino:</label>
            <input
                type="text"
                id="localDestino"
                name="localDestino"
                value={form.localDestino}
                onChange={handleChange}
            />
            <label htmlFor="veiculoUsado">Selecione o Veículo:</label>
            <select
                type="select"
                id="veiculoUsado"
                name="veiculoUsado"
                value={form.veiculoUsado}
                onChange={handleChange}
            >
                <option>... Selecione o Veículo ...</option>
                <option>Ônibus</option>
                <option>Van</option>
                <option>Mini-Van</option>
            </select>

            <button type="submit">Enviar</button>
        </form>
    );
}

export { CadastroClientes };


// const [formulario, setFormulario] = useState({
//     empresaOnibus: '',
//     placaOnibus: '',
//     nomeMotorista: '',
//     telefoneMotorista: '',
//     nomeExcursionista: '',
//     telefoneExcursionista: '',
//     localHospedagem: '',
//     dataEntrada: '',
//     dataSaida: '',
//     horaEntrada: '',
//     horaSaida: '',
//     localOrigem: '',
//     localDestino: '',
//     veiculoUsado: ''
// });