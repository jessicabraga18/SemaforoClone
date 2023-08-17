const sinal = document.querySelector("#sinal");
const buttons = document.querySelector("#buttons");
let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stopAuto();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0; //ternário substituindo if else mas com atenção


const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ]; // chamar função de forma dinâmica
    turnOn[color]();
    nextIndex();
}
const stopAuto = () => clearInterval ( intervalId )

const turnOn = { // função dentro de um objeto
    'red':    () => sinal.src = 'img/vermelho.jpg',
    'yellow': () => sinal.src = 'img/amarelo.jpg',
    'green':  () => sinal.src = 'img/verde.jpg',
    'auto':   () => intervalId = setInterval(changeColor,1000)
}
buttons.addEventListener('click', trafficLight );