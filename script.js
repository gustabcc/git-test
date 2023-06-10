let list = [];

function menu() {
   
   let quantidadeVeiculos = 0
   for(let i = 0; i < list.length; i++) {
      quantidadeVeiculos = (i + 1);
   }
   return prompt(

      'Quantidade de veículos: ' + quantidadeVeiculos + '\n' +

      'O que deseja fazer:\n' +
      '1. Adicionar Carro\n2. Listar Carros\n3. Sair\n'
   )
};

function addCarro() {
   const carro = {};
   carro.modelo = prompt('Insira o modelo do carro');
   carro.ano = prompt('Insira o ano do carro');
   carro.valor = prompt('Insira o valor do carro');

   const confirmation = confirm(
      'Deseja salvar as seguintes informações?' +
      '\nModelo: ' + carro.modelo +
      '\nAno: ' + carro.ano +
      '\nValor: ' + carro.valor
   );

   if(confirmation) {
      list.push(carro);
   }

   return list;
};

function listCars() {
   
   if(list === 0) {
      alert('Não existem veículos para serem listados');
   } else {
      for(let i = 0; i < list.length; i++) {
         alert(
            'automóvel: ' + (i + 1) + '\n' +
            'Modelo: ' + list[i].modelo + '\n' +
            'Ano: ' + list[i].ano + '\n' +
            'Valor: ' + list[i].valor
         )
      }
   }
     
};

function finalizar() {;
   return alert('Finalizando...')
};

function executar() {

   let option = '';

   do {

      option = menu();

      switch(option) {
         case '1':
            addCarro();
            break;
            
         case '2':
            listCars();
            break;

         case '3':
            finalizar();
            break;

         default:
            alert('Opção inválida');
      }

   } while (option !== '3');
};

executar();