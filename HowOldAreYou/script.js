const form = document.querySelector('form');

const birthdate = document.getElementById('birth');
const res = document.querySelector('p');

const currentYear = new Date().getFullYear();


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const birthYear = new Date(birthdate.value).getFullYear();
    const age = currentYear - birthYear;

    res.innerHTML = "Bonjour tu as "+age+" ans";
    
})