const screen = document.getElementById("typingzone");
screen.value = "";

const displayNumber = function(){
    const screen = document.getElementById("typingzone");
    screen.value += this.textContent;
}

const displayOperateur = function(){
    const screen = document.getElementById("typingzone");
    if  (! estOperateur(screen.value[screen.value.length -1])){
        screen.value += this.textContent;
    }
}

const clearScreen = function(){
    const screen = document.getElementById("typingzone");
    screen.value ="";
}

const eraseScreen = function(){
    const screen = document.getElementById("typingzone");
    const valInput  = screen.value;
    screen.value = valInput.slice(0, valInput.length - 1);

}

const estOperateur = function(caractere){
    return caractere === "+" || caractere === "-" || caractere === "x" || caractere === "/";

}

const setupListeners = function(){
    const boutonClear = document.getElementById("clear");
    const boutonErase = document.getElementById("erase");
    const boutonsNombre = document.querySelectorAll("#numbers-buttons button");
    const boutonsOperations = document.querySelectorAll("#operations-buttons button");
    boutonClear.addEventListener("click", clearScreen);
    boutonErase.addEventListener("click", eraseScreen);
    for (let i = 0; i < boutonsNombre.length; i++ ){
        boutonsNombre[i].addEventListener("click", displayNumber);
    }
    for (let i= 0; i < boutonsOperations.length; i++){
        boutonsOperations[i].addEventListener("click", displayOperateur );
    }
}

setupListeners();