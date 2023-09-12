import { clienteService } from "../service/clientes-service.js"
const pegaURL = new URL(window.location)
//console.log(pegaURL)

const id = pegaURL.searchParams.get('id')

const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

clienteService.detalheCliente(id)
    .then(dados => {
        inputNome.value = dados.nome
        inputEmail.value = dados.email
 })

 const formulario = document.querySelector('[data-form]')
    formulario.addEventListener('submit', (evento) =>{
        evento.preventDefault()

        clienteService.atualizaCliente(id, inputEmail.value, inputNome.value)
        .then(() =>{
            window.location.href = "../telas/edicao_concluida.html"
        })
    })