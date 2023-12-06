function createGame(time1, hora, time2){
    return `
    <li>
    <img src="assets/img/icon-${time1}.png" alt="${time1}"/>
    <strong>${hora}</strong>
    <img src="assets/img/icon-${time2}.png" alt="${time2}"/>
    </li>
    `
}
let delay = -0.4;

function createCard(data, dia, jogos){
    return ` 
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${data} <span>${dia}</span></h2>
    <ul>
    ${jogos}
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML =  
createCard("24/11", "quinta", createGame("santos", "13:00", "palmeiras"))