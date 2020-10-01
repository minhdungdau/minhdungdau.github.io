//Set nội dung về trạng thái mặc định

const player_0 = document.querySelector('.player-0-panel')
const player_1 = document.querySelector('.player-1-panel')

const name_0 = document.getElementById('name-0')
const name_1 = document.getElementById('name-1')
const score_0 = document.getElementById('score-0')
const score_1 = document.getElementById('score-1')

const current_0 = document.getElementById('current-0')
const current_1 = document.getElementById('current-1')

const btn_new = document.querySelector('.btn-new')
const btn_roll = document.querySelector('.btn-roll')
const btn_hold = document.querySelector('.btn-hold')

const final_score = document.querySelector('.final-score')

const dice_1 = document.getElementById('dice-1')
const dice_2 = document.getElementById('dice-2')

let current = [0, 0]
let playerCurrent = 0
let score = [0, 0]
let finalscore = 50

//Reset
function reset() {
    name_0.innerText = 'Player 1'
    name_1.innerText = 'Player 2'
    score_0.innerText = 0
    score_1.innerText = 0
    current_0.innerText = 0
    current_1.innerText = 0

    dice_1.style.display = 'none'
    dice_2.style.display = 'none'

    current = [0, 0]
    playerCurrent = 0
    score = [0, 0]
    finalscore = 50
    final_score.value = ''
    player_0.classList.add('active')
    player_1.classList.remove('active')
    name_1.classList.remove('winner')
    name_0.classList.remove('winner')
}
//Xác định player current
function player() {
    if (player_0.classList.contains('active')) {
        playerCurrent = 0
    } else if (player_1.classList.contains('active')) {
        playerCurrent = 1
    }
}

//Lắc xúc xắc
function dicing(playerCurrent) {
    let random1 = Math.floor(Math.random() * 6 + 1)
    let random2 = Math.floor(Math.random() * 6 + 1)
    dice_1.src = `./img/dice-${random1}.png`
    dice_2.src = `./img/dice-${random2}.png`
    dice_1.style.display = 'block'
    dice_2.style.display = 'block'

    if (random1 != 1 && random2 != 1) {
        current[playerCurrent] += random1 + random2
        document.getElementById('success-music').play()
    } else {
        current[playerCurrent] = 0;
        document.getElementById('failed-music').play()
        player_0.classList.toggle('active')
        player_1.classList.toggle('active')
    }
    if (playerCurrent == 0) {
        current_0.innerText = current[0]
    } else current_1.innerText = current[1]
}

// Lưu điểm
function holding(playerCurrent) {
    if (playerCurrent == 0) {
        score[0] += current[0]
        score_0.innerText = score[0]
        current[0] = 0
        current_0.innerText = current[0]
    } else {
        score[1] += current[1]
        score_1.innerText = score[1]
        current[1] = 0
        current_1.innerText = current[1]
    }
    player_0.classList.toggle('active')
    player_1.classList.toggle('active')
    dice_1.style.display = 'none'
    dice_2.style.display = 'none'
}

//Winner
function winner() {
    if (score[0] + current[0] >= finalscore) {
        name_0.classList.add('winner')
        // alert(`${name_0.innerText} winner`)
        // reset()
    } else if (score[1] + current[1] >= finalscore) {
        name_1.classList.add('winner')
        // alert(`${name_1.innerText} winner`)
        // reset()
    }
}

//Mức điểm winner
final_score.addEventListener('keyup', function () {
    if (Number(final_score.value)) {
        finalscore = final_score.value
    } else finalscore = 50
    console.log(finalscore)
})

window.onload = reset

btn_roll.onclick = function () {
    player()
    dicing(playerCurrent)
    winner()
}

btn_hold.onclick = function () {
    player()
    holding(playerCurrent)
    winner()
}

btn_new.onclick = reset