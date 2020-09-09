const canvas = document.getElementById('canvas')
canvas.width = innerWidth * 0.9;
canvas.height = innerHeight * 0.9;
canvas.style.background = 'black'
canvas.style.border = '10px solid blue'

const ctx = canvas.getContext('2d')

class Circle {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.dx = 0
        this.dy = 0
        this.score = 0
    }

    //vẽ bóng
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
    }

    //vẽ bóng boss
    drawBoss(name) {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = 'white'
        ctx.font = 'bold 12pt calibri'
        ctx.fillText(name, (this.x - 25), this.y + 3)
    }

    drawScore() {
        ctx.beginPath()
        ctx.fillStyle = 'white'
        ctx.font = '40pt calibri'
        ctx.fillText(this.score, 50, canvas.height - 50)
    }
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
            this.dy = -Math.abs(this.dy)
        }
        if (this.y <= this.radius) {
            this.dy = Math.abs(this.dy)
        }
    }

    eat(ballBoss) {
        let d = Math.sqrt(Math.pow(this.x - ballBoss.x, 2) + Math.pow(this.y - ballBoss.y, 2))
        let sumR = this.radius + ballBoss.radius
        if (d <= sumR) {
            return true
        }
    }
}

//Hàm random in range
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Random màu theo mã rgb
function rgb() {
    color = 'rgb(';
    for (var i = 0; i < 3; i++) {
      color += Math.floor(Math.random() * 255) + ',';
    }
    return color.replace(/\,$/, ')');
  }

//Khai báo bóng boss
let radiusBoss = 40
let boss = new Circle(radiusBoss, radiusBoss, radiusBoss, 'orange')

//Tạo mảng chứa n quả bóng xuất hiện ngẫu nhiên để bắn
let n = 30          //số lượng bóng
let radius = 17    //bán kính của bóng

let balls = []
for (let i = 0; i < n; i++) {
    let ball = new Circle(random(radius, canvas.width - radius), random(radius, canvas.height - radius), radius, rgb())
    balls.push(ball)
}

//Hàm sự kiện
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 39) {
        boss.dx = 2
        boss.dy = 0
    }
    if (event.keyCode == 37) {
        boss.dx = -2
        boss.dy = 0
    }
    if (event.keyCode == 40) {
        boss.dx = 0
        boss.dy = 2
    }
    if (event.keyCode == 38) {
        boss.dx = 0
        boss.dy = -2
    }
})

//animation
function animate() {
    console.log('animate');
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach((ball) => ball.draw())
    boss.move()
    boss.drawBoss(userName.value)
    boss.drawScore()
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].eat(boss) == true) {
            balls.splice(i, 1)
            boss.score += 1
            new Audio('http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Mouse%20Click%20Fast.wav-23232-Free-Loops.com.mp3').play();
            if (boss.score % 5 == 0) {
                boss.radius += 5
            }
            if (boss.score == n) {
                toastr["success"]("Chúc mừng bạn")
                setTimeout(function () {
                    playingGame.style.display = 'none'
                    endGame.style.display = 'block'
                    //reset giá trị
                    boss.x = radiusBoss
                    boss.y = radiusBoss
                    boss.radius = radiusBoss
                    boss.dx = 0
                    boss.dy = 0
                    boss.score = 0
                    balls = []
                    for (let i = 0; i < n; i++) {
                        let ball = new Circle(random(radius, canvas.width - radius), random(radius, canvas.height - radius), radius, rgb())
                        balls.push(ball)
                    boss.drawBoss(userName.value)
                    }
                }, 2000)
            }
        }
    }
}

animate()
