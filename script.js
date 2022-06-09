// GOALS

// Phase 1:
// Take n number of players and n number of games.
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
    "Player1",
    "Player2",
    "Player3",
    "Player4",
    "Player5",
    "Player6",
    "Player7",
    "Player8",
    "Player9",
    "Player10",
    "Player11",
    "Player12",
    "Player13",
    "Player14",
    "Player15",
    "Player16",
    "Player17",
    "Player18",
    "Player19",
    "Player20"
]
const stubGames = [
    "Game1",
    "Game2",
    "Game3",
    "Game4",
    "Game5",
    "Game6",
    "Game7",
    "Game8",
    "Game9",
    "Game10"
]

let activePlayers = []
let activeGames = []

stubPlayers.forEach(function(name, index) {
    activePlayers[index] = new Player(name)
})

stubGames.forEach(function(name, index) {
    activeGames[index] = new Game(name)
})

console.log(stubPlayers)
console.log(stubGames)
console.log(activePlayers)
console.log(activeGames)
