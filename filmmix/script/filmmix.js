function redirecionar(arquivo) {
    window.location.href = arquivo;
}
function clicar_menu(){
    const menu_navegacao = document.getElementById('menu_links');
    menu_navegacao.classList.toggle('show'); // Alterna entre adicionar e remover a classe
}