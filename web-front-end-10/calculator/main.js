const btns = document.querySelector(".btns")
const calc = document.querySelector(".calc")
const result = document.querySelector(".result")

//mảng các nút
let buttons = ["(", ")", "%", "AC", 7, 8, 9, "÷", 4, 5, 6, "x", 1, 2, 3, "-", 0, ".", "=", "+"]

let equations = ["+", "-", "x", "÷"]
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let btn = []
let show_calculation = ""
let calculation = ""
let logic = false

//Vòng lặp tạo các nút và gán css
for (let i = 0; i < 20; i++) {
    btn[i] = document.createElement("button")
    btn[i].innerHTML = buttons[i]
    btn[i].classList.add('btn-box')
    btns.append(btn[i])

    if (buttons[i] == "=") {
        btn[i].classList.add('equal')
    }

    if (buttons[i] == "AC") {
        btn[i].classList.add('ac')
    }

    if (Number.isInteger(buttons[i])) {
        btn[i].classList.add('number')
    }
}

//phép tính hiển thị
function show_calc(button) {

    //nếu nút đầu tiền không phải là số thì mặc định là 0
    if (!numbers.includes(button.innerText)
        && button.innerText != '('
        && show_calculation == '') {
        show_calculation = '0'
    }

    //ngăn lặp các dấu phép tính và dấu .
    if (equations.includes(button.innerText)) {
        switch (show_calculation.charAt(show_calculation.length - 1)) {
            case "+":
            case "-":
            case "x":
            case "÷":
                show_calculation = show_calculation.slice(0, show_calculation.length - 1)
                break;
        }
    }

    if (button.innerText == "=") {
        show_calculation += ")".repeat(show_calculation.split('(').length - show_calculation.split(')').length)
    }
    show_calculation += button.innerText
    calc.innerText = show_calculation

}

//phép tính thực tế
function hide_calc(button) {
    //nếu nút đầu tiền không phải là số thì mặc định là 0
    if (!numbers.includes(button.innerText)
        && button.innerText != '('
        && calculation == '') {
        calculation = '0'
    }

    //tránh lặp 
    if (equations.includes(button.innerText)) {
        switch (calculation.charAt(calculation.length - 1)) {
            case "+":
            case "-":
            case "*":
            case "/":
                calculation = calculation.slice(0, calculation.length - 1)
                break;
        }
    }
    switch (button.innerText) {
        case "÷":
            calculation += "/"
            break;
        case "x":
            calculation += "*"
            break;
        case "%":
            calculation += "*0.01"
            break;
        case "=":
            calculation += ")".repeat(calculation.split('(').length - calculation.split(')').length)
            result.innerText = `${eval(calculation)}`
            btn[3].innerText = "AC"
            btn[3].classList.add('ac')
            btn[3].classList.remove('ce')
            break;
        case "CE":
            calculation = calculation.slice(0, calculation.length - 1)
            break;
        default:
            calculation += button.innerText
            break;
    }
}

//Nút AC để clear
//Nút AC sẽ xuất hiện khi load và khi click vào dấu bằng, nếu không thì thay thế là nút CE
function btn_AC(button) {
    if (button.innerText == 'AC') {
        show_calculation = ''
        calculation = ''
        calc.innerText = show_calculation
        result.innerText = '0'
    }
    btn[3].innerText = "CE"
    btn[3].classList.add('ce')
    btn[3].classList.remove('ac')
}

//Nút CE để backspace
function btn_CE(button) {
    if (button.innerText == 'CE') {
        show_calculation = show_calculation.slice(0, show_calculation.length - 1)
        calculation = calculation.slice(0, calculation.length - 1)
        calc.innerText = show_calculation
    }
}

//Điều kiện phép tính đúng logic
function preventWrong(button) {
    switch (button.innerText) {
        //Xử lý nút "0" không được xuất hiện khi bắt đầu
        case "0":
            if (calculation == '' || show_calculation == '') {
                logic = false
                show_calculation = '0'
                calc.innerText = show_calculation
            } else {
                logic = true
            }
            break;

        //Xử lý nút ")": chỉ xuất hiện sau chữ số và đã có dấu "(" phía trước
        case (')'):
            if (numbers.includes(show_calculation.charAt(show_calculation.length - 1))
                && calc.innerText.split('(').length > calc.innerText.split(')').length) {
                logic = true
            } else {
                logic = false
            }
            break;

        //Xử lý nút "(": chỉ xuất hiện sau dấu phép tính hay số hoặc khi bắt đầu phép tính mới hoặc chính dấu '('
        case ('('):
            if (numbers.includes(show_calculation.charAt(show_calculation.length - 1))
                || equations.includes(show_calculation.charAt(show_calculation.length - 1))
                || show_calculation.charAt(show_calculation.length - 1) == "("
                || show_calculation == "") {
                logic = true
            } else {
                logic = false
            }
            break;

        //Xử lý các nút "+", "x", "÷" chỉ xuất hiện sau số hoặc các dấu khác hoặc khi bắt đầu phép tính mới
        case ('+'):
        case ('x'):
        case ('÷'):
            if (numbers.includes(show_calculation.charAt(show_calculation.length - 1))
                || (equations.includes(show_calculation.charAt(show_calculation.length - 1)) && show_calculation.charAt(show_calculation.length - 2) != "(")
                || show_calculation == "") {
                logic = true
            } else {
                logic = false
            }
            break;

        //Xử lý các nút "%" chỉ xuất hiện sau số hoặc khi bắt đầu phép tính mới
        case ('%'):
            if (numbers.includes(show_calculation.charAt(show_calculation.length - 1))
                || show_calculation == "") {
                logic = true
            } else {
                logic = false
            }
            break;

        //Xử lý nút ".": chỉ xuất hiện sau số hoặc khi bắt đầu phép tính mới và không được lặp
        case ('.'):
            if (numbers.includes(show_calculation.charAt(show_calculation.length - 1))
                && show_calculation.charAt(show_calculation.length - 1) != '.'
                || show_calculation == "") {
                logic = true
            } else {
                logic = false
            }
            break;

        //Xử lý dấu "=" khi phép tính đúng
        case ('='):
            if (!equations.includes(show_calculation.charAt(show_calculation.length - 1))
                && show_calculation.charAt(show_calculation.length - 1) != '.'
                && show_calculation.charAt(show_calculation.length - 1) != '('
                && show_calculation.charAt(show_calculation.length - 1) != '=') {
                logic = true
            } else {
                logic = false
            }
            break;

        case ('CE'):
            btn_CE(button)
            logic = false
            break;
        case ('AC'):
            btn_AC(button)
            logic = false
            break;
        default:
            logic = true
            break;
    }
    console.log(logic)
}

for (let i = 0; i < 20; i++) {
    btn[i].onclick = function () {
        preventWrong(this)
        if (logic == true) {
            show_calc(this)
            hide_calc(this)
            if (this.innerText == "=") {
                calculation = ""
                show_calculation = ""
            }
        }
    }
}
