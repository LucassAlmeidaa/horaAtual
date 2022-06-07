let parag = document.querySelector('.parag');

function clicar(){
    now = new Date
    parag.innerHTML = '<strong>No horário de brasilia temos agora  </strong>' + now.getHours() +'<strong> horas e </strong>'+now.getMinutes()+'<strong> minutos</strong>';
}
