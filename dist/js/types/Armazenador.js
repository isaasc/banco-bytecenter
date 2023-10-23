export class Armazenador {
    constructor() { }
    static salvar(chave, valor) {
        const valeAsString = JSON.stringify(valor);
        localStorage.setItem(chave, valeAsString);
    }
    static obter(chave, reviver) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
    }
}
