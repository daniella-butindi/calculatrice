const displayNumber = function(){
    const screen = document.getElementById("typingzone");
    screen.value = this.textContent;
}

const setupListeners = function(){
    const boutons = document.querySelectorAll("#numbers-buttons button");
    for (let i = 0; i < boutons.length; i++ ){
        boutons[i].addEventListener("click", displayNumber);
    }
}

setupListeners();