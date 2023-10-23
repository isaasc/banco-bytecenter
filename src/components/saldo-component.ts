import Conta from "../types/Conta.js";
import { formatarMoeda } from "../utils/formatters.js";

let saldoElement = document.querySelector("[data-valor]") as HTMLElement;

renderizarSaldo();
function renderizarSaldo(): void {
    if (saldoElement) {
        saldoElement.textContent = formatarMoeda(Conta.getSaldo());
        Conta.agruparTransacoes()
    }
}

const SaldoComponent = {
    atualizar: function () {
        renderizarSaldo();
    }
}

export default SaldoComponent;