//Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function volSphere(radius){
    return Math.pow(radius, 3)* 4/3 * Math.PI
}

//Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với 
//tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function sumIn(int1,int2){
    if (Number.isInteger(int1) && Number.isInteger(int2) && Math.abs(int1-int2)>1){
        sum = 0
        for (i = Math.min(int1, int2) + 1; i < Math.max(int1, int2); i++){
            sum+=i
        }
        return sum
    } else {return "false"}
}

//Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false. 

// function prime(num){
//     if (num > 1 && Number.isInteger(num)){
//         for (var i = 2; i < num; i++){
//             if (num % i == 0){
//                 return false
//             }
//         }
//       return true
//     } return false
// }
function prime(num){
    if (num < 2 || !Number.isInteger(num)){
        return false
    }
    for (var i = 2; i < num; i++){
        if (num % i == 0){
            return false
        }
    }
    return true
}

//Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham 
//số truyền vào.

function prime(num){
    if (num < 2 || !Number.isInteger(num)){
        return false
    }
    for (var i = 2; i < num; i++){
        if (num % i == 0){
            return false
        }
    }
    return true
}

function sumPrime(num){
    var sum = 0;
    for (i = 0; i <= num; i++){
        if (prime(i)){
            sum+=i
        }
    }
    return sum
}

//Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function sumUoc(num){
    sum = 0
    for (i = 1; i <= num; i++){
        if (num % i == 0){
            sum += i
        }
    }
    return sum
}
