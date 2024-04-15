const calcScreen = document.querySelector(".screen")
const numButtons = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operations]")
const equalsButton = document.querySelector("[data-equals]")
const delButton = document.querySelector("[data-delete]")
const clearButton = document.querySelector("[data-clear]")
let num = "";
let result = 0
let operationValue = undefined

equalsButton.addEventListener("mouseup",()=>{
   switch(operationValue){
      case "+":
         result += num
         break
      case "-":
         result -= num
         break
      case "/":
         result /= num
         break
      case "X":
         result *= num
   }
   calcScreen.innerHTML = ""
   calcScreen.innerHTML += result
})

function updateScreen(value){
   calcScreen.innerHTML += value
}


calcScreen.addEventListener(num !== undefined,()=>{

})

numButtons.forEach(button=>{
   button.addEventListener("mouseup",()=>{
      num += button.textContent
      num = parseInt(num)
      updateScreen(num)
   })
})

operationButton.forEach(operation =>{
   operation.addEventListener("mouseup",()=>{
      operationValue = operation.textContent
      result += num
      num = ""
      updateScreen(operationValue)
   })
})

clearButton.addEventListener("mouseup",()=>{
   num = "";
   result = 0;
   operationValue = undefined
   calcScreen.innerHTML = ""
})








