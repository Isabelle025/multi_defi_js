const form = document.querySelector('form');

const string = document.getElementById('string');
const del = document.getElementById('delete');
result = document.getElementById('result');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    let stringValue = string.value;
    let deleteValue = del.value;
    result.textContent = purge(stringValue, deleteValue)

})

function purge(string, del){
    string = string.replaceAll(del,'');
    return string;
}
