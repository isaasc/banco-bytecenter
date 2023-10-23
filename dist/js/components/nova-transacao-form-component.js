import Conta from "../types/Conta.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario?.addEventListener("submit", (e) => {
    try {
        e.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação!");
            return;
        }
        let tipoTransacaoInput = document.querySelector("#tipoTransacao");
        let valorTransacaoInput = document.querySelector("#valor");
        let dataTransacaoInput = document.querySelector("#data");
        const tipoTransacao = tipoTransacaoInput.value;
        const valorTransacao = valorTransacaoInput.valueAsNumber;
        const dataTransacao = new Date(dataTransacaoInput.value + " 00:00:00");
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valorTransacao,
            data: dataTransacao,
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset();
    }
    catch (error) {
        alert(error.message);
    }
});
