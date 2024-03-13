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
                }
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
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

function numPointsScored(playerName) {
    const gameData = gameObject();
    // Search home
    for (const player in gameData.home.players) {
        if (player === playerName) {
            return gameData.home.players[player].points;
        }
    }
    debugger
    // Search away
    for (const player in gameData.away.players) {
        if (player === playerName) {
            return gameData.away.players[player].points;
        }
    }
    return null;
}

function shoeSize(playerName) {
    const gameData = gameObject();
    // Search home
    for (const player in gameData.home.players) {
        if (player === playerName) {
            return gameData.home.players[player].shoe;
        }
    }
    // Search away
    for (const player in gameData.away.players) {
        if (player === playerName) {
            return gameData.away.players[player].shoe;
        }
    }
    return null;
}

function teamColors(teamName) {
    const gameData = gameObject();
    if (gameData.home.teamName === teamName) {
        return gameData.home.colors;
    } else if (gameData.away.teamName === teamName) {
        return gameData.away.colors;
    } else {
        return null;
    }
}

function teamNames() {
    const gameData = gameObject();
    return [gameData.home.teamName, gameData.away.teamName];
}

function playerNumbers(teamName) {
    const gameData = gameObject();
    if (gameData.home.teamName === teamName) {
        return Object.values(gameData.home.players).map(player => player.number);
    } else if (gameData.away.teamName === teamName) {
        return Object.values(gameData.away.players).map(player => player.number);
    } else {
        return null; 
    }
}

function playerStats(playerName) {
    const gameData = gameObject();
    for (const player in gameData.home.players) {
        if (player === playerName) {
            return gameData.home.players[player];
        }
    }
    for (const player in gameData.away.players) {
        if (player === playerName) {
            return gameData.away.players[player];
        }
    }
    return null;
}

//console.log(shoeSize('Alan Anderson'));
//console.log(teamColors('Brooklyn Nets'));
//console.log(teamNames());
//console.log(playerNumbers(Brooklyn Nets));
//console.log(playerStats('Alan Anderson'));