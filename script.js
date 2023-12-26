// Função para cálculo de notas
const calculate = () => {

    // Obtendo entrada do usuário na variável de altura. 
   let quimica = document.querySelector("#quimica").value; 
   let portuguese = document.querySelector("#portuguese").value; 
   let matematica = document.querySelector("#matematica").value; 
   let fisica = document.querySelector("#fisica").value; 
   let grades = "";
 
   // A entrada é uma string, então a conversão de tipo é necessária. */
   let totalgrades = 
   parseFloat(quimica) +
   parseFloat(portuguese) +
   parseFloat(matematica) +
   parseFloat(fisica);
 
   // Verificação da condição de entrega da 
   // nota do aluno com base em percentual
   let porcentagem = (totalgrades / 400) * 100; 
   if (porcentagem <= 100 && porcentagem >= 80) { 
     grades = "A"; 
   } else if (porcentagem <= 79 && porcentagem >= 60) { 
     grades = "B"; 
   } else if (porcentagem <= 59 && porcentagem >= 40) { 
     grades = "C"; 
   } else { 
     grades = "F"; 
   }
   // Verificando se os valores estão vazios se estiverem vazios
   // mostra por favor preencha-os
   if (quimica == "" || portuguese == "" 
             || matematica == "" || fisica == "") { 
     document.querySelector("#monstrardata").innerHTML 
          = "Por favor insira todos os campos"; 
   } else {
     // Verificando a condição para falha e aprovação
     if (porcentagem >= 39.5) { 
         document.querySelector( 
           "#monstrardata"
         ).innerHTML =  
           ` Out of 400 your total is  ${totalgrades}  
           and percentage is ${porcentagem}%. <br>  
           Your grade is ${grades}. You are Pass. `; 
       } else { 
         document.querySelector( 
           "#monstrardata"
         ).innerHTML =  
           ` Out of 400 your total is  ${totalgrades}  
           and percentage is ${porcentagem}%. <br>  
           Your grade is ${grades}. You are Fail. `; 
   } 
  } 
 }; 