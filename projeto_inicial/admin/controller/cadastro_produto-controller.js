import { clienteService } from "../service/clientes-service";

const formulario = document.querySelector('[data-form]')

// Adicione um ouvinte de evento 'submit' ao formulário.
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const prod = evento.target.querySelector('[data-prod]').value
    const preco = evento.target.querySelector('[data-preco]').value
    const descr = evento.target.querySelector('[data-descr]').value

    clienteService.criarProduto(id, prod, preco, descr)
})
