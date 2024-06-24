let calculatorEnter = document.querySelector(".calculator_enter > p");
let calculatorInput = document.querySelector(".calculator_input");
let x = 0;
let y = 0;
let operation = ``;
calculatorInput.addEventListener(`click`, (event)=>{
    let btnActive = document.querySelectorAll(".btn_active")
    function checkingBtnActive(){
        if(btnActive.length === 1){
            btnActive[0].classList.remove("btn_active")
        }
    }
    if(!event.target.classList.contains("btn")) return;
    switch (event.target.innerText){
        case "AC":
            checkingBtnActive()
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
            if(operation === ``){
                if(Array.from(x).includes(".") === false){
                    x += event.target.innerText
                    calculatorEnter.innerHTML = x ;
                }
            }
            else{
                if(Array.from(y).includes(".") === false){
                    y += event.target.innerText
                    calculatorEnter.innerHTML = y ;
                }
            }
            break;
        case "/":
        case "X":
        case "-":
        case "+":
            if(event.target.innerText == "X"){
                operation = "*"
            }
            else{
                operation = event.target.innerText
            }
            if(btnActive.length === 1){
                btnActive[0].classList.remove("btn_active")
                event.target.classList.toggle("btn_active")
            }
            else{
                event.target.classList.toggle("btn_active")
            }
                break;
        case '=':
            checkingBtnActive()
            x = eval(x + operation + y);
            calculatorEnter.innerHTML = x ;
            y = 0
            break;
        default:
            if(operation === ``){
                if(calculatorEnter.innerHTML === "0" && event.target.innerText !=="."){
                x = event.target.innerText
            }
                else {
                x += event.target.innerText
            }
                calculatorEnter.innerHTML = x;
            }
           else{
                checkingBtnActive()
                if(y === 0 && event.target.innerText !=="."){
                    y = event.target.innerText
                }
                else {
                    y += event.target.innerText
                }
                calculatorEnter.innerHTML = y;
            }
    }
});

