const btns = document.querySelector("#btns");
const mensagem = document.createElement('p');
btns.appendChild(mensagem);

mensagem.style.color = 'black'
mensagem.style.fontSize = '20px'
mensagem.style.fontWeight = '900'
mensagem.style.padding = '10px'

class ContaBancaria {
    saldo;
    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar(deposit) {
        if (!deposit) {
            return mensagem.innerHTML = 'INSIRA UM VALOR VÁLIDO!'
        }
        this.saldo += deposit
        document.getElementById('saldoAtual').innerText = this.saldo;
        mensagem.innerHTML = 'DEPOSITADO COM SUCESSO!'
    }

    sacar(saque) {
        if (saque > this.saldo) {
            return mensagem.innerHTML = 'VOCE NÃO TEM ESSE DINHEIRO!'
        }
        if (!saque) {
            return mensagem.innerHTML = 'INSIRA UM VALOR VÁLIDO!'
        }
        this.saldo -= saque
        document.getElementById('saldoAtual').innerText = this.saldo;
        mensagem.innerHTML = 'SAQUE FEITO COM SUCESSO!'
    }
}

function saque() {
    const dinheiro = parseFloat(document.getElementById('dinheiro').value);
    const saldoAtual = parseFloat(document.getElementById('saldoAtual').innerText);
    const contaBanc = new ContaBancaria(saldoAtual);
    contaBanc.sacar(dinheiro)
}

function deposit() {
    const dinheiro = parseFloat(document.getElementById('dinheiro').value);
    const saldoAtual = parseFloat(document.getElementById('saldoAtual').innerText);
    const contaBanc = new ContaBancaria(saldoAtual);
    contaBanc.depositar(dinheiro);
}

function back() {
    window.location.pathname = '/'
}
