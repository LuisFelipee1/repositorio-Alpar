class ControleIluminacao {
    constructor() {
        if (ControleIluminacao.instance) {
            return ControleIluminacao.instance;
        }
        ControleIluminacao.instance = this;
        this.observers = [];
        this.luzes = {
            sala: false,
            cozinha: false,
            quarto: false,
            banheiro: false
        };
    }
    adicionarObservador(observer) {
        this.observers.push(observer);
    }
    notificarObservadores() {
        this.observers.forEach(observer => observer.atualizar(this.luzes));
    }
    alterarEstado(codigoComodo, ligar) {
        this.luzes[codigoComodo] = ligar;
        this.notificarObservadores();
    }
}

const cozinha = document.getElementById(`cozinhaStatus`).style.backgroundColor = 'black'
document.getElementById(`cozinhaStatus`).style.boxShadow = '7px 7px 7px black'

const quarto = document.getElementById(`quartoStatus`).style.backgroundColor = 'black'
document.getElementById(`quartoStatus`).style.boxShadow = '7px 7px 7px black'

const sala = document.getElementById(`salaStatus`).style.backgroundColor = 'black'
document.getElementById(`salaStatus`).style.boxShadow = '7px 7px 7px black'

const banheiro = document.getElementById(`banheiroStatus`).style.backgroundColor = 'black'
document.getElementById(`banheiroStatus`).style.boxShadow = '7px 7px 7px black'

class InterfaceUsuario {
    constructor(codigoComodo) {
        this.codigoComodo = codigoComodo;
        this.controleIluminacao = new ControleIluminacao();
        this.controleIluminacao.adicionarObservador(this);
    }
    
    atualizar(luzes) {
        const status = luzes[this.codigoComodo] ? "Ligada" : "Desligada";
        if (status === 'Ligada') {
            // document.getElementById(`${this.codigoComodo}Status`).style.backgroundColor = 'yellow'
            document.getElementById(`${this.codigoComodo}Status`).style.boxShadow = '7px 7px 7px yellow'
        } else {
            // document.getElementById(`${this.codigoComodo}Status`).style.backgroundColor = 'black'
            document.getElementById(`${this.codigoComodo}Status`).style.boxShadow = '7px 7px 7px black'
        }
    }
}