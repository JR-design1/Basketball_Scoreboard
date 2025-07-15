let homeScoreEl = document.getElementById("home-score-el")
let awayScoreEl = document.getElementById("away-score-el")
let homeScore = 0
let awayScore = 0

function addOneHome(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwoHome(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThreeHome(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addOneAway(){
    awayScore += 1
    awayScoreEl.textContent = awayScore
}

function addTwoAway(){
    awayScore += 2
    awayScoreEl.textContent = awayScore
}

function addThreeAway(){
    awayScore += 3
    awayScoreEl.textContent = awayScore
}