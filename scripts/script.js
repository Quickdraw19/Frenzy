// GOALS

// Phase 1,
// Take n number of players and n number of games. <-Stubbed in with array values.
// Randomly assign two players on a given game.
// Maintain x number of people in the waiting list.
// Record result when a game finishes.
// Assign next matchup with a player in the wait queue with one of the players from the game that was just recorded.
// Need to keep a time limit.

// Phase 2,
// When assigning a matchup for a given player, check to see if they already played
// the opponent and/or the game to be assigned. If so, come up with a way to select
// those assignment to prevent the player from having repeat opponents and games.

import Player from "./player.js"
import Game from "./game.js"
import Matchup from "./matchup.js"

const stubPlayers = [
    {id: 1, name:  "Allen Holyoak"},
    {id: 2, name: "Alyssa Saldivar"},
    {id: 3, name: "Blake Apple"},
    {id: 4, name: "Brandy Holyoak"},
    {id: 5, name: "Dori Shaffer"},
    {id: 6, name: "Dually Holyoak"},
    {id: 7, name: "EK Shaffer"},
    {id: 8, name: "Julian Conrads"},
    {id: 9, name: "Justin LeFevre"},
    {id: 10, name: "Kristy Smith"},
    {id: 11, name: "Lana Bown"},
    {id: 12, name: "Larry DeGraw"},
    {id: 13, name: "Lincoln Smith"},
    {id: 14, name: "Linda Cravens"},
    {id: 15, name: "Logan Smith"},
    {id: 16, name: "Maddy Smith"},
    {id: 17, name: "Marlin Raphael"},
    {id: 18, name: "Nate Smith"},
    {id: 19, name: "Rose Medina"},
    {id: 20, name: "Sean Christensen"}
]

const stubGames = [
    {id: 1, name: "Batman 66 (Premium)"},
    {id: 2, name: "Black Knight, Sword of Rage (Pro)"},
    {id: 3, name: "Disney TRON, Legacy"},
    {id: 4, name: "Flash Gordon"},
    {id: 5, name: "Guardians of the Galaxy (LE)"},
    {id: 6, name: "Houdini, Master of Mystery"},
    {id: 7, name: "Jurassic Park (Pro)"},
    {id: 8, name: "Led Zeppelin (Pro)"},
    {id: 9, name: "Nascar"},
    {id: 10, name: "Pirates of the Caribbean"}
]

let activePlayers = []
let activeGames = []

for (let [index, playerData] of Object.entries(stubPlayers)) {
    activePlayers[index] = new Player(playerData)
}

for (let [index, gameData] of Object.entries(stubGames)) {
    activeGames[index] = new Game(gameData)
}

var tempPlayers = stubPlayers
var tempGames = stubGames

createMatchups()

function createMatchups() {
    while (Object.keys(tempPlayers).length > 1) {
         let opponents = choosePlayers()

         let arena = chooseGame()
         $("#container").append(
             "<p>" +
                 "<h3><u>" + arena + "</u></h3>" +
                 "<h4>" + opponents.player1 + " <input class='btn btn-success btn-sm' type='submit' value='Winner'></h4>" +
                 "vs<br>" +
                 "<h4>" + opponents.player2 + " <input class='btn btn-success btn-sm' type='submit' value='Winner'></h4>" +
             "</p><hr>"
         )
    }
}

function choosePlayers() {
    let player1 = getPlayer()
    let player2 = getPlayer()

    return {player1, player2}
}

function chooseGame() {
    let index = Math.floor(Math.random() * Object.keys(tempGames).length)

    if (index < 0) {
        console.log("Bad game index")
        return false
    }

    let game = tempGames[index]
    tempGames.splice(index, 1)

    return game.name
}

function nextValidIndex(i) {
    let counter = 0
    i++

    while (!tempPlayers[i]) {
        i++
        counter++

        if (i > Object.keys(tempPlayers).length) {
            i = 1
        }

        if (counter > 30) {
           throw new Error("Stuck in loop")
        }
    }

    return i
}

function getPlayer() {
    let index = Math.floor(Math.random() * Object.keys(tempPlayers).length)

    if (index < 0) {
        console.log("Bad player index")
        return false
    }

    if (!tempPlayers[index]) {
        index = nextValidIndex(index)
    }

    let player = tempPlayers[index]
    tempPlayers.splice(index, 1)

    return player.name
}