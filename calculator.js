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

const evaluer = function(){
    const screen = document.getElementById("typingzone");
    const expression = screen.value;
    let operateur = "";
    for (let i = 0; i < expression.length ; i++){
        if (estOperateur(expression[i])){
            operateur = expression[i];
            break;
        }
    }
    const listeValeurs = expression.split(operateur);

    if (operateur === "+"){
        screen.value = parseFloat(listeValeurs[0]) + parseFloat(listeValeurs[1]);
    }
    else if (operateur === "-"){
        screen.value = parseFloat(listeValeurs[0]) - parseFloat(listeValeurs[1]);
    }
    else if (operateur === "x"){
        screen.value = parseFloat(listeValeurs[0]) * parseFloat(listeValeurs[1]);
    }
    else if (operateur === "/"){
        screen.value = parseFloat(listeValeurs[0]) / parseFloat(listeValeurs[1]);
    }
    

}

const setupListeners = function(){
    const boutonEqual = document.getElementById("eq");
    const boutonClear = document.getElementById("clear");
    const boutonErase = document.getElementById("erase");
    const boutonsNombre = document.querySelectorAll("#numbers-buttons button");
    const boutonsOperations = document.querySelectorAll("#operations-buttons button");
    boutonClear.addEventListener("click", clearScreen);
    boutonErase.addEventListener("click", eraseScreen);
    boutonEqual.addEventListener("click", evaluer);
    for (let i = 0; i < boutonsNombre.length; i++ ){
        boutonsNombre[i].addEventListener("click", displayNumber);
    }
    for (let i= 0; i < boutonsOperations.length; i++){
        boutonsOperations[i].addEventListener("click", displayOperateur );
    }
}

setupListeners();