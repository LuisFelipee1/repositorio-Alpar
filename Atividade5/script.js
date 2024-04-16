// https://pokeapi.co/api/v2/pokemon
const API = 'https://pokeapi.co/api/v2/pokemon'
// DECLARÇÃO DE VARIÁVEIS
const divPoke = document.querySelector('.pokemons');
const div = document.createElement('div');
divPoke.appendChild(div)
const bodyTag = document.body;
const input = document.querySelector('.inputPoke')
const divAllPokes = document.querySelector('.allPokes')
const allPokes = document.createElement('div');
divAllPokes.appendChild(allPokes)

async function renderPokemons(pokemon) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const resp = await data.json();
    // console.log('TODOS:' + resp);
    allPokes.innerHTML += `
    <div class="card">
        <div class="pokemon">
            <h2>${resp.name}</h2>
            <img src=${resp.sprites.front_default} 
            alt=${resp.name}>
            <h3>habilidades:</h3>
            <ul>
                <li>${resp.abilities[0].ability.name}</li>
                <li>${resp.abilities[1].ability.name}</li>
                <li>${resp.abilities[2] ? resp.abilities[2].ability.name : ''}</li>
            </ul>
        </div>
    </div>
    `
}

async function renderall() {
    const data = await fetch(API);
    const resp = await data.json();
    // div.innerHTML = ''
    for (let index = 0; index < resp.results.length; index++) {
        renderPokemons(resp.results[index].name)
        index += 1
    }
}

async function showPoke() {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`);
    const resp = await data.json();
    console.log(resp);
    div.innerHTML = `
    <div class="card">
        <div class="pokemon">
            <h2>${resp.name}</h2>
            <img src=${resp.sprites.front_default} alt="Bulbassauro">
            <h3>habilidades:</h3>
            <ul>
                <li>${resp.abilities[0].ability.name}</li>
                <li>${resp.abilities[1].ability.name}</li>
                <li>${resp.abilities[2] ? resp.abilities[2].ability.name : ''}</li>
            </ul>
            <button onclick="div.innerHTML = ''">Excluir</button>
        </div>
    </div>
    `
    // divPoke.innerHTML = ''
}

function back() {
    window.location.pathname = '/'
}
