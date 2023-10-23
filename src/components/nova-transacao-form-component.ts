import Conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";

const elementoFormulario = document.querySelector(
    ".block-nova-transacao form"
) as HTMLFormElement;

elementoFormulario?.addEventListener("submit", (e) => {
    try {
        e.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação!");
            return;
        }

        let tipoTransacaoInput = document.querySelector(
            "#tipoTransacao"
        ) as HTMLSelectElement;
        let valorTransacaoInput = document.querySelector(
            "#valor"
        ) as HTMLInputElement;
        let dataTransacaoInput = document.querySelector(
            "#data"
        ) as HTMLInputElement;

        const tipoTransacao: TipoTransacao =
            tipoTransacaoInput.value as TipoTransacao;
        const valorTransacao: number = valorTransacaoInput.valueAsNumber;
        const dataTransacao: Date = new Date(dataTransacaoInput.value + " 00:00:00");

        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao,
            valor: valorTransacao,
            data: dataTransacao,
        };

        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset();
    } catch (error) {
        alert(error.message);
    }
});
