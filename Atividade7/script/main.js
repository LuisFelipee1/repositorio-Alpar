// Criando instância da interface de usuário para cada cômodo
const salaInterface = new InterfaceUsuario("sala");
const cozinhaInterface = new InterfaceUsuario("cozinha");
const quartoInterface = new InterfaceUsuario("quarto");
const banheiroInterface = new InterfaceUsuario("banheiro");
// Event Listeners para botões


// sala
document.getElementById("salaLigar").addEventListener("click", function() {
    ControleIluminacao.instance.alterarEstado("sala", true);
});
document.getElementById("salaDesligar").addEventListener("click", function() {
    ControleIluminacao.instance.alterarEstado("sala", false);
});

// cozinha
document.getElementById("cozinhaLigar").addEventListener("click", function() {
    ControleIluminacao.instance.alterarEstado("cozinha", true);
});
document.getElementById("cozinhaDesligar").addEventListener("click", function() {
    ControleIluminacao.instance.alterarEstado("cozinha", false);
});

//quarto
document.getElementById("quartoLigar").addEventListener("click", function() {
    ControleIluminacao.instance.alterarEstado("quarto", true);
});
document.getElementById("quartoDesligar").addEventListener("click", function() {
    ControleIluminacao.instance.alterarEstado("quarto", false);
});

//banheiro
document.getElementById("banheiroLigar").addEventListener("click", function() {
    ControleIluminacao.instance.alterarEstado("banheiro", true);
});
document.getElementById("banheiroDesligar").addEventListener("click", function() {
    ControleIluminacao.instance.alterarEstado("banheiro", false);
});

function back() {
    window.location.pathname = 'luisfelipee1.github.io/repositorio-Alpar/'
}