import ValidaCPF from './ValidaCPF';

export default class GeraCPF{
   aleatorio(min = 100000000, max = 999999999){
return String(Math.floor(Math.random() * (max -min) + min));
   } 

   formatado(cpf){
       return (
           cpf.slice(0, 3) + '.' +
           cpf.slice(3, 6) + '.' +
           cpf.slice(6, 9) + '_' +
           cpf.slice(9, 11) 
       
       )
   }

   geraNovoCPF(){
       const cpfSemDigito = this.aleatorio();
       const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
       const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
       const novoCPF = cpfSemDigito + digito1 + digito2;
    //    return novoCPF;
       return this.formatado(novoCPF);
   }
}