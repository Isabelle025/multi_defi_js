const carre = document.querySelector("div");
let n = 0;

carre.addEventListener('click', ()=>{
    n++;
    if (n%10===0){
    carre.style.backgroundColor= 'pink';
}
    else if (n%2===0){
        carre.style.backgroundColor='green';
}
    else{
        carre.style.backgroundColor='yellow';
    }
})

