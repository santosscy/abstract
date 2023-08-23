abstract class Veiculo {
    Marca: string;
    modelo: string;

    constructor(Marca: string, modelo: string){
        this.Marca = Marca;
        this.modelo = modelo;
    }

     apresenta(){
        console.log(this.Marca, this.modelo)
     }
    

}