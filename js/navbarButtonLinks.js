
const display = document.getElementById("Banish")
const display2 = display.children
const button = document.getElementsByClassName("navbar__menu")[0] 

function headeroptions() {
    const Width = window.innerWidth; 

    if (Width < 1250) {
        if (button.innerHTML === "x") {
            button.innerHTML = "≡";
        } else if (button.innerHTML === "≡") {
            button.innerHTML = "x";
        }

        if (button.innerHTML === "x") {
            display.classList.add("navbar__otherVisible");
            display.classList.remove("navbar__otherHidden");
            for (let i = display2.length - 1; i >= 0; i--) {
                display2[i].classList.add("navbar__otherVisible__opcionesWide");
                display2[i].classList.remove("navbar__otherHidden__opcionesWide");
            }
        } else if (button.innerHTML === "≡") {
            display.classList.add("navbar__otherHidden");
            display.classList.remove("navbar__otherVisible");
            for (let i = display2.length - 1; i >= 0; i--) {
                display2[i].classList.add("navbar__otherHidden__opcionesWide");                
                display2[i].classList.remove("navbar__otherVisible__opcionesWide");
            }
        }
    }
}

function screenSize() {
    const Width = window.innerWidth; 

    if (Width >= 1250) {
        display.classList.add("navbar__otherHidden");
        button.innerHTML = "≡";
        display.classList.remove("navbar__otherVisible");
        for (let i = display2.length - 1; i >= 0; i--) {
            display2[i].classList.add("navbar__otherHidden__opcionesWide");
            display2[i].classList.remove("navbar__otherVisible__opcionesWide");
        }
    } else {    
        if(!display.classList === "navbar__otherVisible"){
            display.classList.add("navbar__otherHidden");
        }
        if (!display2[0].classList === "navbar__otherVisible__opcionesWide"){
            for (let i = display2.length - 1; i >= 0; i--) {
                display2[i].classList.remove("navbar__otherVisible__opcionesWide");
                display2[i].classList.add("navbar__otherHidden__opcionesWide");
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    screenSize();
});

window.addEventListener("resize", function() {
    screenSize();
});
