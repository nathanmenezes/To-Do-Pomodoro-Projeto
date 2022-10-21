let addToDoButtom = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let todoid = 0;



addToDoButtom.addEventListener('click', function () {

    let div = document.createElement(`div`); // cria o elemento <div>


    div.classList.add(`toDoItem`); //adiciona classe na div
    div.setAttribute('id', todoid); //adiciona id na div
    toDoContainer.appendChild(div); // adiciona a div como elemento filho da div principal


    let paragraph = document.createElement(`p`); // Cria o elemento <p>
    let btnCheck = document.createElement(`button`); //cria o elemento <button>
    let btnRemove = document.createElement(`button`);

    paragraph.classList.add(`paragraph-styling`); // Adiciona Classe
    btnCheck.classList.add(`btnCheck`); // Adiciona Classe
    btnRemove.classList.add(`btnRemove`); // Adiciona Classe

    paragraph.innerText = inputField.value; // Adiciona o Valor do Input no <p>
    btnCheck.innerText = "✔";
    btnRemove.innerText = "✖";

    let toDoItem = document.getElementById(todoid)
    toDoItem.appendChild(paragraph); // Adiciona no documento a task
    toDoItem.appendChild(btnCheck);
    toDoItem.appendChild(btnRemove);

    inputField.value = ""; // Reseta o input

    btnCheck.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.color = "green";
    });

    btnRemove.addEventListener('click', function () {
        toDoContainer.removeChild(div);
    });

})

function addId() {
    todoid++;
}

let minutos = 25;
let segundos = 0;
let time;

let fase = "Foco";

function timer(){
    if (segundos == 0){
        minutos--;
        segundos = 60;
    }
    segundos--;
    if (minutos == 0 && segundos == 0 && fase == "Foco"){
        alert("Hora de Descansar!");
        minutos = 5;
        segundos = 0;
        fase = "Descansar";
    }
    if (minutos == 0 && segundos == 0 && fase == "Descansar"){
        alert("Hora de Voltar ao Foco!");
        minutos = 25;
        segundos = 0;
        fase = "Foco";
    }
    document.getElementById("timer").innerHTML = minutos + ":" + segundos;
    document.getElementById("status").innerHTML = fase;
}

function start(){
    time = setInterval(() => { timer(); }, 1000);
}

function stop(){
    clearInterval(time);
}

function reset(){
    minutos = 25;
    segundos = 00;
    document.getElementById("timer").innerHTML = minutos + ":" + segundos;
}






