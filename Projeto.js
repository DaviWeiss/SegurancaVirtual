function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosDavi = ['Rafela', 'Davi', 'Rafael', 'Renata', 'Alexandre', 'Gabriela', 'Isabela', 'Marcela', 'Sophia', 'Giovanna'];
    if(ConvidadosDavi.includes(NomeConvidado)){
        document.getElementById('permissaoEntrada').innerText = 'Você pode entrar!'
    }
    else {
        document.getElementById('permissaoEntrada').innerText = 'Você não pode entrar!'
    }
}
