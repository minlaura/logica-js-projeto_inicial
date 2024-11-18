alert('Seja bem-vindo ao Número Secreto');
let numeroMaximo= 5000;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;


//enquanto chute não for igual ao secreto

 while(chute != numeroSecreto){
    chute = prompt ('Escolha um número entre 1 e ' + numeroMaximo);
        if (numeroSecreto == chute) {
            break;
            
        } else {

            alert('Você errou, tente outra vez!')
            if (chute>numeroSecreto){
                alert ('O número secreto é menor que ' + chute); 
            } else {
                alert('O número secreto é maior que ' + chute);
            }
            //tentativas = tentativas + 1;
            tentativas++;
            
        }
 }

 let palavraTentativa = tentativas > 1? ' tentativas' : ' tentativa';
 alert('Você descobriu o número! ' + numeroSecreto + '. Com '  + tentativas + palavraTentativa); 
// if (tentativas > 1) {
   // alert('Você descobriu o número! ' + numeroSecreto + '. Com ' + tentativas +' tentativas.');
// } else {
  //  alert('Você descobriu o número! ' + numeroSecreto + '. Com ' + tentativas +' tentativa.'); 

 //}
