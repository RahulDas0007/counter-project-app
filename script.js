const incButton = document.querySelector(".inc-btn");
const decButton = document.querySelector(".dec-btn");
const resButton = document.querySelector(".res-btn");
const heading = document.querySelector(".heading");
let inputElement = document.getElementById('number');

let plusNum = 0;


function getInputValue() {
    return parseInt(inputElement.value) || 1;
}
incButton.addEventListener('click', () => {
    let inputValue = getInputValue(); 
    plusNum += inputValue;            
    heading.textContent = plusNum;    
});

decButton.addEventListener('click', () => {
    let inputValue = getInputValue(); 
    plusNum -= inputValue;            
    heading.textContent = plusNum;    
});
resButton.addEventListener('click', () => {
    plusNum = 0;                      
    heading.textContent = plusNum;    
    inputElement.value = '';          
});
