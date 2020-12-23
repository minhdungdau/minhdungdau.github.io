const calc = $(".calc")
const result = $(".result")

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
    // btn[i] = document.createElement("button") $("<button></button>")
    btn[i] = $("<button></button>")
    btn[i].html(buttons[i])
    btn[i].addClass('btn-box')
    $(".btns").append(btn[i])

    if (buttons[i] == "=") {
        btn[i].addClass('equal')
    }

    if (buttons[i] == "AC") {
        btn[i].addClass('ac')
    }

    if (Number.isInteger(buttons[i])) {
        btn[i].addClass('number')
    }
}

//phép tính hiển thị
function show_calc(button) {

    //nếu nút đầu tiền không phải là số thì mặc định là 0
    if (!numbers.includes(button.text()) && button.text() != '(' && show_calculation == '') {
        show_calculation = '0'
    }

    //ngăn lặp các dấu phép tính và dấu .
    if (equations.includes(button.text())) {
        switch (show_calculation.charAt(show_calculation.length - 1)) {
            case "+":
            case "-":
            case "x":
            case "÷":
                show_calculation = show_calculation.slice(0, show_calculation.length - 1)
                break;
        }
    }

    if (button.text() == "=") {
        show_calculation += ")".repeat(show_calculation.split('(').length - show_calculation.split(')').length)
    }
    show_calculation += button.text()
    $(".calc").text(show_calculation)

}

//phép tính thực tế
function hide_calc(button) {
    //nếu nút đầu tiền không phải là số thì mặc định là 0
    if (!numbers.includes(button.text())
        && button.text() != '('
        && calculation == '') {
        calculation = '0'
    }

    //tránh lặp 
    if (equations.includes(button.text())) {
        switch (calculation.charAt(calculation.length - 1)) {
            case "+":
            case "-":
            case "*":
            case "/":
                calculation = calculation.slice(0, calculation.length - 1)
                break;
        }
    }

    //đổi sang công thức tính
    switch (button.text()) {
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
            result.text(`${eval(calculation)}`)
            btn[3].text("AC")
            btn[3].addClass('ac')
            btn[3].removeClass('.ce')
            break;
        case "CE":
            calculation = calculation.slice(0, calculation.length - 1)
            break;
        default:
            calculation += button.text()
            break;
    }
}

//Nút AC để clear
//Nút AC sẽ xuất hiện khi load và khi click vào dấu bằng, nếu không thì thay thế là nút CE
function btn_AC(button) {
    if (button.text() == 'AC') {
        show_calculation = ''
        calculation = ''
        calc.text(show_calculation)
        result.text('0')
    }
}

//Nút CE để backspace
function btn_CE(button) {
    if (button.text() == 'CE') {
        show_calculation = show_calculation.slice(0, show_calculation.length - 1)
        calculation = calculation.slice(0, calculation.length - 1)
        calc.text(show_calculation)
    }
}

//Điều kiện phép tính đúng logic
function preventWrong(button) {
    switch (button.text()) {
        //Xử lý nút "0" không được xuất hiện khi bắt đầu
        case "0":
            if (calculation == '' || show_calculation == '') {
                logic = false
                show_calculation = '0'
                calc.text(show_calculation)
            } else {
                logic = true
            }
            break;

        //Xử lý nút ")": chỉ xuất hiện sau chữ số và đã có dấu "(" phía trước
        case (')'):
            if (numbers.includes(show_calculation.charAt(show_calculation.length - 1))
                && calc.text().split('(').length > calc.text().split(')').length) {
                logic = true
            } else {
                logic = false
            }
            break;

        //Xử lý nút "(": chỉ xuất hiện sau dấu phép tính hoặc khi bắt đầu phép tính mới hoặc chính dấu '('
        case ('('):
            if (equations.includes(show_calculation.charAt(show_calculation.length - 1))
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
            btn[3].text("CE")
            btn[3].addClass("ce")
            btn[3].removeClass('ac')
            break;
    }
}

$(function () {
    for (let i = 0; i < 20; i++) {
        btn[i].click(function () {
            preventWrong($(this))
            if (logic == true) {
                show_calc($(this))
                hide_calc($(this))
                if ($(this).text() == "=") {
                    calculation = ""
                    show_calculation = ""
                }
            }
        })
    }
});

$("#slider").change(function () {
    $("body").toggleClass("dark-body")
    $(".container").toggleClass("dark-container")
})