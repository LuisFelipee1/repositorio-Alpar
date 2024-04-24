let div = document.querySelector('.todo');
let inputTask = document.querySelector('.inputTask');
let inputTime = document.querySelector('.inputTime');

let tasks = [];

function adicionar() {
    if (inputTask.value !== '') {
        tasks.push({task: inputTask.value, time: inputTime.value});
        const task = inputTask.value
        const times = inputTime.value

        let btnExcluir = document.createElement('button');
        btnExcluir.classList.add('btnExcluir')
        let tarefas = document.createElement('div');
        let icon = document.createElement('img');
        icon.src = './delete_forever_FILL0_wght400_GRAD0_opsz24.png'
        btnExcluir.prepend(icon)

        div.appendChild(tarefas);
        tarefas.classList.add('eachTask');

        tarefas.innerHTML += `
            <input type="checkbox" class="check">
            <p>${task}</p><p>${times}</p>
        `
        tarefas.appendChild(btnExcluir);

        btnExcluir.addEventListener('click', () => {
            tarefas.remove();
        })
        inputTask.value = ''
        inputTime.value = ''
        console.log(tasks);
        console.log(inputTime.value);
    }
}
