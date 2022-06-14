// GOALS

// Phase 1:
// Take n number of players and n number of games. <-Stubbed in with array values.
// Randomly assign two players on a given game.
// Maintain x number of people in the waiting list.
// Record result when a game finishes.
// Assign next matchup with a player in the wait queue with one of the players from the game that was just recorded.
// Need to keep a time limit.

// Phase 2:
// When assigning a matchup for a given player, check to see if they already played
// the opponent and/or the game to be assigned. If so, come up with a way to select
// those assignment to prevent the player from having repeat opponents and games.

import Player from "./player.js"
import Game from "./game.js"
import Matchup from "./matchup.js"

const stubPlayers = [
    "Player 1",
    "Player 2",
    "Player 3",
    "Player 4",
    "Player 5",
    "Player 6",
    "Player 7",
    "Player 8",
    "Player 9",
    "Player 10",
    "Player 11",
    "Player 12",
    "Player 13",
    "Player 14",
    "Player 15",
    "Player 16",
    "Player 17",
    "Player 18",
    "Player 19",
    "Player 20"
]
const stubGames = [
    "Game 1",
    "Game 2",
    "Game 3",
    "Game 4",
    "Game 5",
    "Game 6",
    "Game 7",
    "Game 8",
    "Game 9",
    "Game 10"
]

let activePlayers = []
let activeGames = []

stubPlayers.forEach(function(name, index) {
    activePlayers[index] = new Player(name)
})

stubGames.forEach(function(name, index) {
    activeGames[index] = new Game(name)
})

var tempPlayers = stubPlayers
var tempGames = stubGames

createMatchups()

function createMatchups() {
    while (tempPlayers.length > 1) {
        let opponents = choosePlayers()
        let arena = chooseGame()
    }
}

function choosePlayers() {
    let index = Math.floor(Math.random() * tempPlayers.length)
    let player1 = tempPlayers[index]
    tempPlayers.splice(index, 1)

    index = Math.floor(Math.random() * tempPlayers.length)
    let player2 = tempPlayers[index]
    tempPlayers.splice(index, 1)

    $("#container").append("<p>" + player1 + " vs " + player2 + "</p>")

    return {player1, player2}
}

function chooseGame() {
    
}