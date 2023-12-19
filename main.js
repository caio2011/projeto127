const quickDrawDataset = [
    "Cachorro",
    "Gato",
    "Casa",
    "Árvore",
    "Carro",
    "Bicicleta",
    "Computador",
    "Girafa",
    "Elefante",
    "Avião",
    "Moto",
    "Skate",
]

const randomNumber = Math.floor(Math.random() * quickDrawDataset.length);
console.log(quickDrawDataset[randomNumber]);
const sketch = quickDrawDataset[randomNumber];
document.getElementById("desenho").textContent = "Esboço a Ser Desenhado: " + sketch;

let timerCounter = 0;
let timerCheck = "";
let drawSketch = "";
let answerHolder = "";
let score = 0;