export declare class GerarRateio {
    private valor;
    private parcela;
    constructor(valor: number, parcela: number);
    private validaPropriedades;
    gerarRateio(): number[];
    gerarProvaReal(): {
        provaReal: boolean;
    };
    private executar;
}
