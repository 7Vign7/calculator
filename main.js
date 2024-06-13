const calculatorInput = document.querySelector(".calculator_input");
const btn = Array.from(document.querySelectorAll("div"))//делает масив
calculatorInput.addEventListener(`click`, (event)=>{
    if(event.target.classList.contains("btn")){ //event.target выводит элемент на который нажали(хранит ссылку на элемент который вызвал событие)
        console.log(event.target.innerText);// innerText логично выводит только содержание блока
    }
});
