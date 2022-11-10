function createGame(player1, hour, player2) {

    return `
    <li>
        <abbr title="${player1.toUpperCase()}"><img src="./assets/bandeiras-dos-paises/icon=${player1}.svg" alt="Bandeira do ${player1}"></abbr>
        <strong>${hour}</strong>
        <abbr title="${player2.toUpperCase()}"><img src="./assets/bandeiras-dos-paises/icon=${player2}.svg" alt="Bandeira da ${player2}"></abbr>
    </li>
    `

}

let delay = -0.2

function createCard(date, dayOfWeek, games) {

    delay += 0.2

    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2 class="title">${date} <span>${dayOfWeek}</span></h2>
        
        <ul>
            ${games}
        </ul>
    </div>
    `

}

function createCards() {
    
    let cards = document.querySelector('#cards')
    
    cards.innerHTML =
        createCard(
                '22/11', 'terça', createGame('argentina', '07:00', 'saudi arabia') + createGame('france', '16:00', 'australia')
            ) +
        createCard(
                '23/11', 'quarta', createGame('spain', '13:00', 'costa rica') + createGame('belgium', '16:00', 'canada')
            ) +
        createCard(
                '24/11', 'quinta', createGame('portugal', '13:00', 'ghana') + createGame('brazil', '16:00', 'serbia')
            ) +
        createCard(
                '27/11', 'domingo', createGame('croatia', '13:00', 'canada') + createGame('spain', '16:00', 'germany')
            ) +
        createCard(
                '28/11', 'segunda', createGame('serbia', '07:00', 'cameroon') + createGame('switzerland', '13:00', 'brazil')
            ) +
        createCard(
                '02/12', 'sexta', createGame('portugal', '12:00', 'south korea') + createGame('brazil', '16:00', 'cameroon')
            )

}

createCards()