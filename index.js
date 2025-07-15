let homeScoreEl = document.getElementById("home-score-el")
let awayScoreEl = document.getElementById("away-score-el")
let homeScore = 0
let awayScore = 0

window.addOneHome = function(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

window.addTwoHome = function(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

window.addThreeHome = function(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

window.addOneAway = function(){
    awayScore += 1
    awayScoreEl.textContent = awayScore
}

window.addTwoAway = function(){
    awayScore += 2
    awayScoreEl.textContent = awayScore
}

window.addThreeAway = function(){
    awayScore += 3
    awayScoreEl.textContent = awayScore
}