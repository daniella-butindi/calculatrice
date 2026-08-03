const displayNumber = function(){
    const screen = document.getElementById("typingzone");
    screen.value = this.textContent;
}

const setupListeners = function(){
    const boutonsNombre = document.querySelectorAll("#numbers-buttons button");
    const boutonsOperations = document.querySelectorAll("#operations-buttons button");
    for (let i = 0; i < boutonsNombre.length; i++ ){
        boutonsNombre[i].addEventListener("click", displayNumber);
    }
    for (let i= 0; i < boutonsOperations.length; i++){
        boutonsOperations[i].addEventListener("click", displayNumber );
    }
}

setupListeners();