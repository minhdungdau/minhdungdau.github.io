const startGame = document.getElementById('start')
const playingGame = document.getElementById('playing')
const endGame = document.getElementById('end')

//nút start

const btn_start = document.getElementById('btn-start')

btn_start.addEventListener('click', function () {
    startGame.style.display = 'none'
    playingGame.style.display = 'block'
    timedown(time)
})

//nút replay

const btn_replay = document.getElementById('reset')

btn_replay.addEventListener('click', function () {
    endGame.style.display = 'none';
    playingGame.style.display = 'block';
    time = 30
    timedown(time)
})

//nút out

const btn_out = document.getElementById('out')

btn_out.addEventListener('click', function () {
    endGame.style.display = 'none'
    startGame.style.display = 'block'
})