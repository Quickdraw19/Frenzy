export default class Matchup {
    id = 0
    constructor(players, game) {
        this.id = this.id++
        this.matchId   = this.id
        this.opponents = players
        this.arena     = game
    }
}