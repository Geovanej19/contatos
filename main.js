'use strict'


//Importando a função getContatos do arquivo contatos.js
import {getContatos, postContato, putContato, deleteContato} from "./contatos.js"



const btnSalvar = document.getElementById('btnSalvar')

btnSalvar.addEventListener('click', salvarContato)

function salvarContato() {

    const contato = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value,
        foto: document.getElementById('imagem').value,
        endereco: document.getElementById('endereco').value,
        cidade: document.getElementById('cidade').value

    }

       // envia para API
       postContato(contato)

       // atualiza tabela
       listarContatos()
   
       // limpa os inputs
       limparCampos()

    console.log(contato)
}

//console.log(await getContato(novoContato))
//console.log(await postContato(novoContato));
//console.log(await putContato());
//console.log(await deleteContato());