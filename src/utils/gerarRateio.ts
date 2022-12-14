export class GerarRateio {
  private valor: number;
  private parcela: number;

  constructor(valor: number, parcela: number) {
    this.valor = valor;
    this.parcela = parcela;
    this.validaPropriedades();
  }

  private validaPropriedades() {
    if (!this.parcela || !this.valor) throw Error('Não há valor ou parcela válidos');
  }

  gerarRateio() {
    return this.executar().rateio;
  }

  private executar() {
    const valor = this.valor;
    const parcela = this.parcela;

    if (!valor) {
      throw new Error('Não há valor informado');
    }

    const rateio: number[] = [];

    for (let i = 0; i < parcela; i++) {
      const entradaValor = valor / parcela;
      rateio.push(+entradaValor.toFixed(2));
    }

    const somaRateio = +rateio.reduce((a, b) => a + b).toFixed(2);

    // Se tiver diferença soma ao primeiro item ou retira do último
    if (valor - somaRateio !== 0) {
      const restante = valor - somaRateio;
      let posicao = 0;

      if (restante < 0) posicao = rateio.length - 1;

      const primeiroItem = rateio[posicao];
      rateio[posicao] = +(primeiroItem + restante).toFixed(2);
    }

    const novoRateio = +rateio.reduce((a, b) => a + b).toFixed(2);

    const rateioComParcela = rateio.map((item, i) => ({
      valor: item,
      parcela: `${i + 1}/${parcela}`,
    }));

    return {
      valor,
      parcela,
      rateio,
      novoRateio,
      rateioComParcela,
    };
  }
}
