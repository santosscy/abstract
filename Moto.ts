class Moto extends Veiculo{
    cilindro: number;

    constructor(cilindro: number, marca: string, modelo: string){

        super(marca, modelo) 
        this.cilindro = cilindro;
    }
}
let moto = new Moto(6, 'honda', 'hornet')
moto.apresenta()