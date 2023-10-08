
function gameObject() {
    return {
            home: {
                teamName: "Brooklyn Nets",
                colors: ["Black", "White"],
                players: {
                    "Alan Anderson": {
                        number: 0,
                        shoe: 16,
                        points: 22,
                        rebounds: 12,
                        assists: 12,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 1
                    },
                    "Reggie Evans": {
                        number: 30,
                        shoe: 14,
                        points: 12,
                        rebounds: 12,
                        assists: 12,
                        steals: 12,
                        blocks: 12,
                        slamDunks: 7
                    },
                    "Brook Lopez": {
                        number: 11,
                        shoe: 17,
                        points: 17,
                        rebounds: 19,
                        assists: 10,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 15
                    },
                    "Mason Plumlee": {
                        number: 1,
                        shoe: 19,
                        points: 26,
                        rebounds: 12,
                        assists: 6,
                        steals: 3,
                        blocks: 8,
                        slamDunks: 5
                    },
                    "Jason Terry": {
                        number: 31,
                        shoe: 15,
                        points: 19,
                        rebounds: 2,
                        assists: 2,
                        steals: 4,
                        blocks: 11,
                        slamDunks: 1
                    },
                }
            },
            away: {
                teamName: "Charlotte Hornets",
                colors: ["Turquoise", "Purple"],
                players: {
                    "Jeff Adrien": {
                        number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2
                    },
                    "Bismak Biyombo": {
                        number: 0,
                        shoe: 16,
                        points: 12,
                        rebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10
                    },
                    "DeSagna Diop": {
                        number: 2,
                        shoe: 14,
                        points: 24,
                        rebounds: 12,
                        assists: 12,
                        steals: 4,
                        blocks: 5,
                        slamDunks: 5
                    },
                    "Ben Gordon": {
                        number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0
                    },
                    "Brendan Haywodd": {
                        number: 33,
                        shoe: 15,
                        points: 6,
                        rebounds: 12,
                        assists: 12,
                        steals: 22,
                        blocks: 5,
                        slamDunks: 12
                    },
                }
            }
        }
}

console.log(gameObject());

function numPointsScored(playersName) {
    let game = gameObject();

    for (const team in game) {
        if (game[team].players.hasOwnProperty(playersName)) {
            let playersPoints = game[team].players[playersName].points;
            return playersPoints;
        }
    }
}

function shoeSize(playersName) {
    let game = gameObject();

    for (const team in game) {
        if (game[team].players.hasOwnProperty(playersName)) {
            let playerShoeSize = game[team].players[playersName].shoe;
            return playerShoeSize;
        }
    }
}

function teamColors(teamName) {
    let game = gameObject();

    for (const team in game) {
        if(game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
}

function teamNames() {
    let game = gameObject();
    let teamsPlaying = [];

    let homeTeam = game.home.teamName;
    let awayTeam = game.away.teamName;

    teamsPlaying.push(homeTeam);
    teamsPlaying.push(awayTeam);

    return teamsPlaying;
}

function playerNumbers(teamName) {
    let game = gameObject();
    let jersey = [];
  
    if (game.home.teamName === teamName) {
      for (const player in game.home.players) {
        let jerseyNumber = game.home.players[player].number;
        jersey.push(jerseyNumber);
      }
    } else if (game.away.teamName === teamName) {
        for (const player in game.away.players) {
            let jerseyNumber = game.away.players[player].number;
        jersey.push(jerseyNumber);
        }

    } else {
        return "Not a team playing.";
    }

    return jersey;
  }

function playerStats(playersName) {
    let game = gameObject();

    for (const team in game) {
        if (game[team].players.hasOwnProperty(playersName)) {
            let playersInfo = game[team].players[playersName];
            return playersInfo;
        }
    }
  }

function bigShoeRebounds() {
    let game = gameObject();
    let playerInfo;
    let biggestShoeSize = 0;
  
    for (const team in game) {
      
      for (const player in game[team].players) {
        
        let eachShoeSize = game[team].players[player].shoe;
  
        if (eachShoeSize > biggestShoeSize) {
          biggestShoeSize = eachShoeSize;
          playerInfo = game[team].players[player];
        }
      }
    }
    return playerInfo.rebounds;
  }

function mostPointsScored() {
    let game = gameObject();
    let playersName;
    let highestPoints = 0;
  
    for (const team in game) {
      
      for (const player in game[team].players) {
        
        let eachPlayersPoints = game[team].players[player].points;
  
        if (eachPlayersPoints > highestPoints) {
            highestPoints = eachPlayersPoints;
          playersName = player;
        }
      }
    }
    return playersName;
}

function winningTeam() {
    let game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;

    for (const homePlayer in game.home.players) {
        homeTeamPoints += game.home.players[homePlayer].points;
    }

    for (const awayPlayer in game.away.players) {
        awayTeamPoints += game.away.players[awayPlayer].points;
    }

    if (homeTeamPoints > awayTeamPoints) {
        return game.home.teamName;
    } else if (homeTeamPoints < awayTeamPoints) {
        return game.away.teamName;
    } else {
        return "It's a tie!";
    }
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';

    for (const player in game.home.players) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    for (const player in game.away.players) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    return longestName;
}

function doesLongNameStealATon() {
    function mostSteals() {
        let game = gameObject();
        let playerWithMostSteals;
        let highestSteals = 0;
      
        for (const team in game) {
          
          for (const player in game[team].players) {
            
            let eachSteal = game[team].players[player].steals;
      
            if (eachSteal > highestSteals) {
              highestSteals = eachSteal;
              playerWithMostSteals = player;
            }
          }
        }
        return playerWithMostSteals;
      }
      if (mostSteals() === playerWithLongestName()) {
        return true;
      }
}