const lineup = [{
  id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
}, {
  id: 2, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 123, salary: 3800
}, {
  id: 3, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 123, salary: 2500
}, {
  id: 4, name: 'Luke Voit', position: '1B', teamId: 20, gameId: 115, salary: 2800
}, {
  id: 5, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
}, {
  id: 6, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
}, {
  id: 7, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
}, {
  id: 8, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
}, {
  id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 3600
}]



function validateLineUp(lineup) {
  let valid = true
  let totalSalary = 0
  let seperateTeamPlayers = []
  let seperateGamePlayers = []
  let sameTeam = 0
  let sameGame = 0
  let expectedPositions = ['1B', '2B', '3B', 'C', 'OF', 'OF', 'OF', 'P', 'SS']
  const playerPositions = lineup.map(player => player.position)

  lineup.forEach(player => {
    totalSalary += player.salary
  })

  lineup.forEach(player => {
    if (seperateTeamPlayers.includes(player.teamId)) {
      sameTeam++
    } else {
      seperateTeamPlayers.push(player.teamId)
    }
  })

  lineup.forEach(player => {
    if (seperateGamePlayers.includes(player.gameId)) {
      sameGame++
    } else {
      seperateGamePlayers.push(player.gameId)
    }
  })

  console.log(seperateGamePlayers)

  if (totalSalary > 45000) {
    valid = false
  }

  if (sameTeam >= 2) {
    valid = false
  }

  if (sameGame >= 3) {
    valid = false
  }

  if (lineup.length > 9) {
    valid = false
  }

  if (playerPositions.sort().join('') !== expectedPositions.join('')) {
    valid = false
  }

  return valid
}

console.log(validateLineUp(lineup))

module.exports = validateLineUp
