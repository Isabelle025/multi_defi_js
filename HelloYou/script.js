const form = document.querySelector('form');

const lastname = document.querySelector('#name');
const prenom = document.querySelector('#prenom');

const res = document.querySelector('p');

form.addEventListener('submit', function(e){
    e.preventDefault();
    res.innerHTML = "Bonjour" +" " +lastname.value +" " +prenom.value;

})

//concaténer + et mettre un espace dans une chaine de caractères" "




