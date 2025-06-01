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