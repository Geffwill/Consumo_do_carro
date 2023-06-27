
/*
const etanaol = 4.24;
const gasolina = 5.24;
const tipoDeCombust = gasolina;
const gastMedioKm = 15;
const distaDaViagem = 280;

let calc = distaDaViagem / gastMedioKm;
let total = calc * tipoDeCombust;
console.log(total.toFixed(2))
*/
function calcularGastoMedio() {
    let distancia = parseFloat(document.getElementById("distancia").value);
    let consumo = parseFloat(document.getElementById("consumo").value);
    let preco = parseFloat(document.getElementById("preco").value);
    
    let gastoTotal = distancia / consumo ;
    let gastoMedio = gastoTotal * preco;
    
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "O gasto para essa viagem será de R$ " + gastoMedio.toFixed(2);
  }
  