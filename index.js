const homePoint = document.getElementById("home-point")
const guestPoint = document.getElementById("guest-point")

let homeScore = 0
let guestScore = 0
let highestScore = 0
let highestTeamScore = null

function addPoint(team,points) {
    if (team === 'home'){
        homeScore += points
    } else if (team === 'guest'){
        guestScore += points
    }
    
    updateScore()
}

function updateScore() {
    homePoint.textContent = homeScore
    guestPoint.textContent = guestScore
    
    if(homeScore > guestScore) {
        highestScore = homeScore
        highestTeamScore = 'home'
    } else if(guestScore > homeScore) {
        highestScore = guestScore
        highestTeamScore = 'guest'
    } else {
        highestScore = 0
        highestTeamScore = null
    }
    addBorder()
}

function addBorder() {
    homePoint.classList.remove("yellow")
    guestPoint.classList.remove("yellow")
    
    if(highestScore > 0) {
        const element = highestTeamScore === 'home' ? homePoint : guestPoint
        element.classList.add("yellow")
    }
}

function clearScore() {
    homeScore = 0
    guestScore = 0
    homePoint.textContent = homeScore
    guestPoint.textContent = guestScore
    homePoint.classList.remove("yellow")
    guestPoint.classList.remove("yellow")
}

