const canvas = document.getElementById('tetris-canvas')
const ctx = canvas.getContext('2d')
class Game { 
    constructor() {
        this.score = 0
        this.boardHeight = 23
        this.boardWidth = 10
        this.currentBoard = new Array(this.boardHeight).fill().map(() => new Array(this.boardWidth).fill(0))
        this.landedBoard = new Array(this.boardHeight).fill().map(() => new Array(this.boardWidth).fill(0))
        this.currentTetromino = this.randomTetromino()
        this.nextTetromino = this.randomTetromino()
    }

    draw(blockSize = 24, padding = 4) {
        // Vẽ khung game
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.lineWidth = 1
        ctx.rect(0, 0, blockSize * this.boardWidth + padding * (this.boardWidth + 1), blockSize * (this.boardHeight - 3) + padding * (this.boardHeight - 3 + 1))
        ctx.stroke()

        //Vẽ các block
        for (let i = 3; i < this.boardHeight; i++) {
            for (let j = 0; j < this.boardWidth; j++) {
                switch (this.currentBoard[i][j]) {
                    case 1:
                        ctx.fillStyle = LShape.color
                        break;
                    case 2:
                        ctx.fillStyle = JShape.color
                        break;
                    case 3:
                        ctx.fillStyle = OShape.color
                        break;
                    case 4:
                        ctx.fillStyle = TShape.color
                        break;
                    case 5:
                        ctx.fillStyle = SShape.color
                        break;
                    case 6:
                        ctx.fillStyle = ZShape.color
                        break;
                    case 7:
                        ctx.fillStyle = IShape.color
                        break;
                    case 0:
                        ctx.fillStyle = 'rgb(248, 248, 248)'
                        break;
                }
                ctx.fillRect(padding + j * (blockSize + padding), padding + (i - 3) * (blockSize + padding), blockSize, blockSize)
            }
        }

        //Viết text
        ctx.fillStyle = "#000"
        ctx.font = '14px Roboto,sans-serif'
        ctx.fillText('TIẾP THEO:', 300, 28)
        ctx.fillText('ĐIỂM SỐ:', 300, 200)
        ctx.fillText(this.score.toString(), 300, 225)

        //Vẽ khối Tetromino tiếp THEO
        for (let i = 0; i < this.nextTetromino.height; i++) {
            for (let j = 0; j < this.nextTetromino.width; j++) {
                if (this.nextTetromino.shape[i][j] > 0) {
                    ctx.fillStyle = this.nextTetromino.constructor.color
                    ctx.fillRect(310 + j * (blockSize + padding), 70 + i * (blockSize + padding), blockSize, blockSize)
                }
            }
        }
    }

    randomTetromino() {
        const random = Math.floor(Math.random() * 7)
        switch (random) {
            case 0:
                return new LShape(1)
            case 1:
                return new JShape(1)
            case 2:
                return new OShape(2)
            case 3:
                return new TShape(2)
            case 4:
                return new SShape(2)
            case 5:
                return new ZShape(2)
            case 6:
                return new IShape(0)
        }
    }

    play() {
        setInterval(() => {
            this.progress()
            this.updateCurrentBoard()
            this.draw()
        }, 800)
    }

    progress() {
        //Xét điều kiện Tetromino vượt ra biên dưới hoặc chạm vào Tetromino đã yên vị
        let temp1Tetromino = new this.currentTetromino.constructor(this.currentTetromino.row + 1, this.currentTetromino.col, this.currentTetromino.state)
        if (temp1Tetromino.row + temp1Tetromino.height > this.boardHeight || this.overlap(temp1Tetromino)) {
            this.updateLandedBoard()
            this.currentTetromino = this.nextTetromino
            this.nextTetromino = this.randomTetromino()
        } else {
            this.currentTetromino.fall()
        }
        this.checkGameover()
    }

    updateLandedBoard() {
        //Lưu lại trạng thái của Tetromino ở mảng landedBoard
        for (let i = 0; i < this.currentTetromino.height; i++) {
            for (let j = 0; j < this.currentTetromino.width; j++) {
                if (this.currentTetromino.shape[i][j] > 0) {
                    this.landedBoard[this.currentTetromino.row + i][this.currentTetromino.col + j] = this.currentTetromino.shape[i][j]
                }
            }
        }
        this.hitPoint()
    }

    overlap(tetromino) {
        for (let i = 0; i < tetromino.height; i++) {
            for (let j = 0; j < tetromino.width; j++) {
                if (tetromino.shape[i][j] > 0 &&
                    this.landedBoard[tetromino.row + i][tetromino.col + j] > 0) {
                    return true
                }
            }
        }
    }

    tryMoveDown() {
        this.progress()
        this.updateCurrentBoard()
        this.draw()
    }

    tryMoveLeft() {
        for (let i = 0; i < this.currentTetromino.height; i++) {
            for (let j = 0; j < this.currentTetromino.width; j++) {
                if (this.currentTetromino.shape[i][j] > 0 &&
                    this.landedBoard[this.currentTetromino.row + i][this.currentTetromino.col + j - 1] > 0 || this.currentTetromino.col <= 0) {
                    return
                }
            }
        }
        this.currentTetromino.col -= 1
        this.updateCurrentBoard()
        this.draw()
    }

    tryMoveRight() {
        for (let i = 0; i < this.currentTetromino.height; i++) {
            for (let j = 0; j < this.currentTetromino.width; j++) {
                if (this.currentTetromino.shape[i][j] > 0 &&
                    this.landedBoard[this.currentTetromino.row + i][this.currentTetromino.col + j + 1] > 0 || this.currentTetromino.col + this.currentTetromino.width + 1 > this.boardWidth) {
                    return
                }
            }
        }
        this.currentTetromino.col += 1
        this.updateCurrentBoard()
        this.draw()
    }

    tryRotating() {
        let tempTetromino = new this.currentTetromino.constructor(this.currentTetromino.row + 1, this.currentTetromino.col, this.currentTetromino.state)
        tempTetromino.rotate()
        if (!(tempTetromino.col + tempTetromino.width > this.boardWidth) &&
            !(tempTetromino.row + tempTetromino.height > this.boardHeight) &&
            !this.overlap(tempTetromino)) {
            this.currentTetromino.rotate()
            this.updateCurrentBoard()
            this.draw()
        }
    }

    hitPoint() {
        var time = 0; //Xét số hàng được clear
        //Xét trên landedBoard hàng nào đã được lấp đầy các phần tử > 0
        for (let i = 3; i < this.boardHeight; i++) {
            if (this.landedBoard[i].every((ele) => ele > 0)) {
                for (let k = i; k >= 3; k--) {
                    this.landedBoard[k] = this.landedBoard[k - 1]
                }
                time += 1
            }
        }
        //Tính điểm
        switch (time) {
            case 1:
                this.score += 10
                break;
            case 2:
                this.score += 25
                break;
            case 3:
                this.score += 50
                break;
            case 4:
                this.score += 100
                break
        }
    }

    updateCurrentBoard() {
        for (let i = 0; i < this.boardHeight; i++) {
            for (let j = 0; j < this.boardWidth; j++) {
                this.currentBoard[i][j] = this.landedBoard[i][j]
            }
        }
        for (let i = 0; i < this.currentTetromino.height; i++) {
            for (let j = 0; j < this.currentTetromino.width; j++) {
                if (this.currentTetromino.shape[i][j] > 0) {
                    this.currentBoard[this.currentTetromino.row + i][this.currentTetromino.col + j] = this.currentTetromino.shape[i][j]
                }
            }
        }
    }

    checkGameover() {
        let temp = new this.currentTetromino.constructor(this.currentTetromino.row + 1, this.currentTetromino.col, this.currentTetromino.state)
        if (this.overlap(temp) && this.currentTetromino.row + this.currentTetromino.height <= 4) {
            window.location.reload()
            alert('Gameover')
        }
    }
}

class Tetromino {
    constructor(row, col = 4, state = 0) {
        this.row = row
        this.col = col
        this.state = state
    }

    get shape() {
        return this.constructor.shapes[this.state]
    }

    get width() {
        return this.shape[0].length
    }

    get height() {
        return this.shape.length
    }

    fall() {
        this.row += 1
    }

    rotate() {
        if (this.state < 3) {
            this.state += 1
        } else {
            this.state = 0
        }
    }

    move(direction) {
        if (direction == 'left') {
            this.col -= 1
        } else if (direction == 'right') {
            this.col += 1
        }
    }
}

class LShape extends Tetromino { }

LShape.shapes = [
    [
        [1, 0],
        [1, 0],
        [1, 1]
    ],

    [
        [1, 1, 1],
        [1, 0, 0]
    ],

    [
        [1, 1],
        [0, 1],
        [0, 1]
    ],

    [
        [0, 0, 1],
        [1, 1, 1]
    ]
]

LShape.color = 'rgb(255, 87, 34)'

class JShape extends Tetromino { }

JShape.shapes = [
    [
        [0, 2],
        [0, 2],
        [2, 2]
    ],

    [
        [2, 0, 0],
        [2, 2, 2]
    ],

    [
        [2, 2],
        [2, 0],
        [2, 0]
    ],

    [
        [2, 2, 2],
        [0, 0, 2]
    ]
]

JShape.color = 'rgb(63, 81, 181)'

class OShape extends Tetromino { }

OShape.shapes = [
    [
        [3, 3],
        [3, 3]
    ],

    [
        [3, 3],
        [3, 3]
    ],

    [
        [3, 3],
        [3, 3]
    ],

    [
        [3, 3],
        [3, 3]
    ]
]

OShape.color = 'rgb(255, 235, 59)'

class TShape extends Tetromino { }

TShape.shapes = [
    [
        [0, 4, 0],
        [4, 4, 4]
    ],

    [
        [4, 0],
        [4, 4],
        [4, 0]
    ],

    [
        [4, 4, 4],
        [0, 4, 0]
    ],

    [
        [0, 4],
        [4, 4],
        [0, 4]
    ]
]

TShape.color = 'rgb(156, 39, 176)'

class SShape extends Tetromino { }

SShape.shapes = [
    [
        [0, 5, 5],
        [5, 5, 0]
    ],

    [
        [5, 0],
        [5, 5],
        [0, 5]
    ],

    [
        [0, 5, 5],
        [5, 5, 0]
    ],

    [
        [5, 0],
        [5, 5],
        [0, 5]
    ]
]

SShape.color = 'rgb(76, 175, 80)'

class ZShape extends Tetromino { }

ZShape.shapes = [
    [
        [6, 6, 0],
        [0, 6, 6]
    ],

    [
        [0, 6],
        [6, 6],
        [6, 0]
    ],

    [
        [6, 6, 0],
        [0, 6, 6]
    ],

    [
        [0, 6],
        [6, 6],
        [6, 0]
    ]
]

ZShape.color = 'rgb(183, 28, 28)'

class IShape extends Tetromino { }

IShape.shapes = [
    [
        [7],
        [7],
        [7],
        [7]
    ],

    [
        [7, 7, 7, 7]
    ],

    [
        [7],
        [7],
        [7],
        [7]
    ],

    [
        [7, 7, 7, 7]
    ]
]

IShape.color = 'rgb(0, 188, 212)'

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game()
    game.updateCurrentBoard()
    game.draw()
    game.play()
    document.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
            case 37: // Left
                game.tryMoveLeft()
                break

            case 38: // Up
                game.tryRotating()
                break

            case 39: // Right
                game.tryMoveRight()
                break

            case 40: // Down
                game.tryMoveDown()
                break
        }
    })
})
