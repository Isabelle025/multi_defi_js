window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    body.style.backgroundColor = "black";

    body.addEventListener('keyup', (e) => {
      switch(e.key){
        case "r" :
            body.style.backgroundColor = "red";
            break;
        case "g" :
            body.style.backgroundColor = "green";
            break;
        case "b" :
            body.style.backgroundColor = "blue";
            break;
        case "p" :
            body.style.backgroundColor = "pink";
            break;
        case "y" :
            body.style.backgroundColor = "yellow";
            break;
        default : 
            body.style.backgroundColor = "white";
            break;
      }
    })
})

