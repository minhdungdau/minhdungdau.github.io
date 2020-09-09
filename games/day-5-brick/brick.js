const canvas = document.getElementById('canvas')
canvas.width = 700
canvas.height = 500
canvas.style.background = 'black'
canvas.style.border = '10px solid blue'

const ctx = canvas.getContext('2d')
class Circle {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.dx = 3
        this.dy = -3
        this.moving = true
    }

    //vẽ bóng
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
    }

    //move
    move() {
        this.x += this.dx
        this.y += this.dy
        if (this.x >= canvas.width - this.radius) {
            this.dx = -Math.abs(this.dx)
        }
        if (this.x <= this.radius) {
            this.dx = Math.abs(this.dx)
        }
        if (this.y >= canvas.height - this.radius) {
            this.dy = 0
            this.dx = 0
        }
        if (this.y <= this.radius) {
            this.dy = Math.abs(this.dy)
        }
        this.draw()
    }


    touch(rect) {
        var p = {
            x: this.x,
            y: this.y
        }
        if (p.x < rect.x) {
            p.x = rect.x
        } else if (p.x > rect.x + rect.w) {
            p.x = rect.x + rect.w
        }
        if (p.y < rect.y) {
            p.y = rect.y
        } else if (p.y > rect.h + rect.y) {
            p.y = rect.h + rect.y
        }

        var kcx = this.x - p.x
        var kcy = this.y - p.y
        var touched = (kcx * kcx + kcy * kcy) <= this.radius * this.radius
        return touched
    }
}

class Rect {
    constructor(x, y, w, color) {
        this.x = x
        this.y = y
        this.color = color
        this.w = w
        this.dx = 0
        this.h = 20
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.rect(this.x, this.y, this.w, this.h)
        ctx.fill()
        ctx.closePath()
    }

    move() {
        this.x += this.dx
        if (this.x >= canvas.width - this.w) {
            this.x = canvas.width - this.w
            this.dx = 0
        }
        if (this.x <= 0) {
            this.x = 0
            this.dx = 0
        }
    }

}

let radius = 15
let ball = new Circle(canvas.width / 2, canvas.height - 50 - radius, radius, 'orange')
let w = 150
let thanh = new Rect((canvas.width - w) / 2, canvas.height - 50, w, 'gray')

let brickW = 80
let bricks = []
for (let x = 40; x < canvas.width - brickW; x = x + brickW) {
    for (let i = 0; i < 3; i++) {
        let y = 30 * i + 10
        let brick = new Rect(x, y, brickW, 'white')
        bricks.push(brick)
    }
    x += 10
}
//Sự kiện
document.addEventListener('keydown', function (event) {
    let distance = 10
    if (event.keyCode == 39) {
        thanh.dx = distance
    } else if (event.keyCode == 37) {
        thanh.dx = -distance
    } else thanh.dx = 0
    thanh.move()
    if (event.keyCode == 32) {
        thanh.dx = 0
        ball.dx = 0
        ball.dy = 0
    }
})

function animate() {
    console.log('animate');
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.move()
    thanh.draw()
    if (ball.touch(thanh)) {
        ball.dy = -ball.dy
    }
    bricks.forEach(ele => ele.draw())

    bricks.forEach((ele,index) =>{
        if (ball.touch(ele)){
            bricks.splice(index, 1)
            ball.dy = -ball.dy
            
        }
    })
}

animate()
