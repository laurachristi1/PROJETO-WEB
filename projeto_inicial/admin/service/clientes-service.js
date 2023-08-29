// Função para listar os clientes.
const listaClientes = () => {
   // Faz uma requisição GET para buscar os clientes no endereço especificado.
   return fetch(`http://localhost:3000/profile`)
   // Depois de receber a resposta da requisição...
   .then(resposta => {
      // ... converte essa resposta de formato JSON para um objeto JavaScript.
      return resposta.json()
   })   
}

// Função para criar um novo cliente.
const criarClientes = (nome, email) => {
   // Faz uma requisição POST para adicionar um novo cliente no endereço especificado.
   return fetch(`http://localhost:3000/profile`, {
      method: 'POST', // Define o método da requisição como POST.
      headers: {
         'Content-type' : 'application/json' // Define o tipo de conteúdo enviado como JSON.
      },
      // Converte o nome e email fornecidos para formato JSON para serem enviados na requisição.
      body: JSON.stringify({
         nome: nome,
         email: email
      })
   })
   // Depois de receber a resposta da requisição...
   .then(resposta => {
      // ... converte essa resposta de formato JSON para um objeto JavaScript.
      return resposta.json();
   })
}

// Exporta as funções listaClientes e criarClientes 
// para que elas possam ser usadas em outros módulos/arquivos.
export const clienteService = {
   listaClientes,
   criarClientes  
}
