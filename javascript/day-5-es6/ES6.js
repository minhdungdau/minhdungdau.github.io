// --------------------------------- //
// -------- Bài tập String --------- //
// --------------------------------- //

// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// - Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

const checkExist = (str,substr) => str.includes(substr)

// Bài 2. Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. 
// Ví dụ: shortenString('Xin chào các bạn') => Kết quả trả về là 'Xin chào...'

const shortenString = (str) => `${str.slice(0,8)}...` 

// Bài 3. Viết hàm có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên. 
// Ví dụ: capitalizeString('chÀo MừnG đẾn với techMaster') => Kết quả trả về là 'Chào Mừng Đến Với Techmaster'

const capitalizeString = (str)=> {
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].slice(0,1).toUpperCase()+arr[i].slice(1).toLowerCase()
    }
    return arr.join(' ')
}

// Bài 4. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.

const repeatx10 = (str) => str.repeat(10)

// Bài 5. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'

const repeat10 = (str) => {
    let result = ""
    for (let i = 0; i < 10; i++){
        result += `-${str}`
    }
    return result.slice(1)
}

// Bài 6. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a', 5) => Kết quả trả về là 'a-a-a-a-a'

const repeatxn = (str,n) =>{
    let result =""
    for (let i = 0; i < n; i++){
        result += `-${str}`
    }
    return result.slice(1)
}

// Bài 7. Viết hàm đảo ngược chuỗi. Viết dunction với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString('Hello') => Kết quả trả về là 'olleH'

const reverseString = (str) => str.split('').reverse().join('')

// Bài 8. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false. 
// Ví dụ 'Race car' trả về true, 'hello world' trả về false.

const mirrorCheck = (str) => {
    let removeSpaceStr = str.split(' ').join('').toLowerCase()
    return removeSpaceStr == removeSpaceStr.split('').reverse().join('')
}
// Bài 9: Kiểm tra 1 chuỗi có phải là chuỗi viết hoa hay không?

const upperCheck = (str) => str.toUpperCase()==str


// --------------------------------- //
// -------- Bài tập Array ---------- //
// --------------------------------- //

// Bài 1. Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
// minNumbers([2, 1, 3]) => Kết quả trả về là 1

const minNumbers = (arr) => Math.min(...arr)

// Bài 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
// max2Numbers([2, 1, 3, 4]) => Kết quả trả về là 3

const max2Numbers = (arr) => {
    let x = [...new Set(arr)]
    return x.sort(function(a, b) {return b - a})[1]
}

// Bài 3. Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']

const sortStudents = (arr) => arr.sort((a, b) => {return b.localeCompare(a)})

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100

const sumDiv5 = () => {
    let sum = 0
    for (let i=0; i <= 100; i++){
        if (i % 5 == 0){
            sum+=i
        }
    }
    return sum
}

// Bài 5. Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

const arrDiv2 = (arr) => arr.map(ele => ele % 2)

//Bài 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số

// ['aba', 'aa', 'ad', 'c', 'vcd'] thì kết quả trả về ['aba', 'vcd'].

const longestStr = (arr) => {
    let arrLength = arr.map(ele => ele.length)
    return arr.filter(ele => ele.length==Math.max(...arrLength))
}