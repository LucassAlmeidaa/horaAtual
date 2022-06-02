let parag = document.querySelector('.parag');

function clicar(){
    now = new Date
    parag.innerHTML = 'No horário de brasilia temos agora  ' + now.getHours() +' horas e '+now.getMinutes()+' minutos';
}