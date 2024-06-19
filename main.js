let calculatorEnter = document.querySelector(".calculator_enter > p");
let calculatorInput = document.querySelector(".calculator_input");
let x = 0;
let y = 0;
let operation = ``;
calculatorInput.addEventListener(`click`, (event)=>{
    if(!event.target.classList.contains("btn")) return;
    switch (event.target.innerText){
        case "AC":
            x = 0
            y = 0
            operation = ``
            calculatorEnter.innerHTML = "0"
            break;
        case "+/-":
            x = -x
            calculatorEnter.innerHTML = x
            break;
        case "%":
            x = x / 100
            calculatorEnter.innerHTML = x
            break;
        case ".":
            if(Array.from(x).includes(".") === false){
                x += event.target.innerText
                calculatorEnter.innerHTML = x ;
            }
            break;
        case "/":
        case "X":
        case "-":
        case "+":
            operation = event.target.innerText
            calculatorEnter.innerHTML = "0"
            break;
        case '=':
            break;
        default:
            if(calculatorEnter.innerHTML === "0" && event.target.innerText !=="."){
                x = event.target.innerText
                calculatorEnter.innerHTML = x;
            }
            else {
                x += event.target.innerText
                calculatorEnter.innerHTML = x;
            }
    }
});