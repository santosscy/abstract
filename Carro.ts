class Carro extends Veiculo{
    portas: number;

    constructor(portas: number, marca: string, modelo: string){

        super(marca, modelo) 
        this.portas = portas;
    }
}
 let carro = new Carro(4, 'ford', 'mustang')
 carro.apresenta()