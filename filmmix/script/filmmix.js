function redirecionar(arquivo) {
    window.location.href = arquivo;
}
function clicar_menu(){
    const menu_navegacao = document.getElementById('menu_links');
    menu_navegacao.classList.toggle('show');  // troca entre adicionar e remover
    const btn = document.getElementById('menu_navegacao');
    if(btn.style.transform === "rotate(180deg)"){
        btn.style.transform = "rotate(0deg)";
    }else{
        btn.style.transform = "rotate(180deg)";
    }
    /*
        Checa se o botão já está rotacionado (rotate(180deg)).
        Se sim, volta pra posição normal (rotate(0deg)).
        Se não, aplica a rotação.
    */
    btn.style.transition = "0.5s"
}

function creat_account(){
    event.preventDefault();
    const msg = document.querySelector(".align");
    const form = document.querySelector('.formAccount');
    const nomeid = document.getElementById('idname');
    const senhaid = document.getElementById('senhaid');
    const cpfid = document.getElementById('cpfid');
    const emailid = document.getElementById('emailid');
    const nascimentoid = document.getElementById('nascimentonameid');
    const estadoid = document.getElementById('estadosid');
    // Inputs verficados
    const nome = nomeid.value;
    const senha = senhaid.value;
    const cpf = cpfid.value;
    const email = emailid.value;
    const nascimento = nascimentoid.value;
    const estado = estadoid.value;

    if(nome === "" && nome.length > 64){
        msg.innerHTML = "Preencha o campo vazio e o número máximo é de 64 caractéres."
    }
    if(senha === "" && senha.length > 64){
        msg.innerHTML = "Preencha o campo vazio e o número máximo é de 64 caractéres."
    }
    if(cpf === ""){
        msg.innerHTML = "Preencha o campo vazio e o número máximo é de 64 caractéres."
    }
    if(email === "" && email.length > 64){
        msg.innerHTML = "Preencha o campo vazio e o número máximo é de 64 caractéres."
    }
    if(nascimento === ""){
        msg.innerHTML = "Preencha o campo vazio e o número máximo é de 64 caractéres."
    }

    form.submit();
}