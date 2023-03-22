"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerarRateio = void 0;
class GerarRateio {
    constructor(valor, parcela) {
        this.valor = valor;
        this.parcela = parcela;
        this.validaPropriedades();
    }
    validaPropriedades() {
        if (!this.parcela || !this.valor)
            throw Error('Não há valor ou parcela válidos');
    }
    gerarRateio() {
        const rateios = this.executar().rateio;
        return rateios;
    }
    gerarProvaReal() {
        const provaReal = this.executar().provaReal;
        return { provaReal };
    }
    executar() {
        const valor = this.valor;
        const parcela = this.parcela;
        if (!valor) {
            throw new Error('Não há valor informado');
        }
        const rateio = [];
        for (let i = 0; i < parcela; i++) {
            const entradaValor = valor / parcela;
            rateio.push(+entradaValor.toFixed(2));
        }
        const somaRateio = +rateio.reduce((a, b) => a + b).toFixed(2);
        if (valor - somaRateio !== 0) {
            const restante = valor - somaRateio;
            let posicao = 0;
            if (restante < 0)
                posicao = rateio.length - 1;
            const primeiroItem = rateio[posicao];
            rateio[posicao] = +(primeiroItem + restante).toFixed(2);
        }
        const provaReal = +rateio.reduce((a, b) => a + b).toFixed(2);
        const rateioComParcela = rateio.map((item, i) => ({
            valor: item,
            parcela: `${i + 1}/${parcela}`,
        }));
        return {
            valor,
            parcela,
            rateio,
            provaReal: valor === provaReal,
            rateioComParcela,
        };
    }
}
exports.GerarRateio = GerarRateio;
//# sourceMappingURL=gerarRateio.js.map