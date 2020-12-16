// Bài 1: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

const sumInRange = (int1, int2) => {
    if (!Number.isInteger(int1) || !Number.isInteger(int2) || (Math.abs(int1 - int2) < 1)) {
        return
    }
    let sum = 0
    for (let i = Math.min(int1, int2) + 1; i < Math.max(int1, int2); i++) {
        sum += i
    }
    console.log(`Tổng tất cả các số nguyên nằm giữa ${int1} và ${int2} là ${sum}`)
    return sum
}

// Bài 2: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

const sumUoc = (num) => {
    let sum = 0
    for (let i = 1; i <= num/2; i++) {
        if (num % i == 0) {
            sum += i
        }
    }
    return sum
}

// Bài 3: Cho 1 số nguyên dương, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function prime(num){
    if (num < 2 || !Number.isInteger(num)){
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i == 0){
            return false
        }
    }
    return true
}

// Bài 4: Cho 1 số nguyên dương. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.

function sumPrime(num){
    let sum = 0;
    for (let i = 0; i <= num; i++){
        let isPrime = true
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                isPrime = false
            }
        }
        if (isPrime){
            sum+=i
        }
    }
    return sum
}

// Bài 5: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.

function capitalizeString(str) {
    let strToArr = str.split(' ')
    for (let i = 0; i < strToArr.length; i++) {
        strToArr[i] = strToArr[i].slice(0,1).toUpperCase() + strToArr[i].slice(1).toLowerCase()
    }
    return strToArr.join(' ')
}

// Bài 6: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.

function spinalString(str) {
    let strToArr = str.split(' ')
    for (let i = 0; i < strToArr.length; i++) {
        strToArr[i] = strToArr[i].toLowerCase()
    }
    return strToArr.join('-')
}

// Bài 7: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car''

function isSymmetric(str) {
    let transformStr = str.split(" ").join("").toLowerCase()
    return transformStr === transformStr.split("").reverse().join("")
}
