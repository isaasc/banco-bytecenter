import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData } from "../utils/formatters.js";
let dataElementAcess = document.querySelector(".block-saldo time");
renderizarData();
function renderizarData() {
    if (dataElementAcess) {
        dataElementAcess.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
    }
}
const DataComponent = {
    atualizar: function () {
        renderizarData();
    }
};
export default DataComponent;
