// Bài 1: Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng
// sample([3, 7, 9, 11]) => 3
// sample([3, 7, 9, 11]) => 9

function randomEle(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

// Bài 2: Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

//Cách 1
function randomSwap(arr) {
    var newArr = arr
    while (newArr.join() == arr) { //Vòng lặp loại bỏ trường hợp mảng mới giống với mảng cũ
        newArr = []
        var cloneArr = arr.slice()
        for (var i = 0; i < arr.length; i++) {
            var x = Math.floor(Math.random() * cloneArr.length)
            newArr.push(cloneArr[x])
            cloneArr.splice(x, 1)
        }
    }
    return newArr
}

//Cách 2
function randomSwap2(arr) {
    var newArr = arr.slice()
    while (newArr.join() == arr) {
        for (var i = 0; i < arr.length; i++) {
            var a = Math.floor(Math.random() * arr.length)
            var tg = newArr[i]
            newArr[i] = newArr[a]
            newArr[a] = tg
        }
    }
    return newArr
}

// Bài 3: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]

//Cách 1
function similarity(arr1, arr2) {
    arr1 = arr1.filter((ele, index) => {
        return arr1.indexOf(ele) == index
    })
    arr2 = arr2.filter((ele, index) => {
        return arr2.indexOf(ele) == index
    })
    newArr = []
    for (x of arr1) {
        for (y of arr2) {
            if (x == y) {
                newArr.push(x)
            }
        }
    }
    return newArr
}

//Cách 2
function similarity(arr1, arr2) {
    arr1 = arr1.filter((ele, index) => {
        return arr1.indexOf(ele) == index
    })
    arr2 = arr2.filter((ele, index) => {
        return arr2.indexOf(ele) == index
    })
    var newArr = arr1.filter((ele, index, arr1) => { return arr2.indexOf(ele) != -1 })
    return newArr
}

//Bài 4: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

function difference(arr1, arr2) {
    var newArr = arr1.filter((ele, index, arr1) => {
        return arr2.indexOf(ele) == -1
    }).concat(arr2.filter((ele, index, arr2) => {
        return arr1.indexOf(ele) == -1
    }))
    return newArr
}

// Bài 5: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3], [4, 3, 2]) => [1,2,3,4]
// union([1, 2, 3], [1, 2, 3]) => [1,2,3]

//Cách 1
function union(arr1, arr2) {
    arr1 = arr1.filter((ele, index) => {
        return arr1.indexOf(ele) == index
    })
    var newArr = arr1.concat(arr2.filter((ele, index) => {
        return arr1.indexOf(ele) == -1
    }))
    return newArr
}

//Cách 2
function union(arr1, arr2) {
    var newArr = arr1.concat(arr2)
    newArr = newArr.filter((ele, index) => {
        return newArr.indexOf(ele) == index
    })
    return newArr
}

// Bài 6: Viết chương trình JavaScript để tạo mã màu HEX ngẫu nhiên.
// random_hex_color_code()

function random_hex_color_code() {
    var character = "ABCDEF0123456789"
    var colorCode = ""
    for (let i = 0; i < 6; i++) {
        colorCode += character[Math.floor(Math.random() * character.length)]
    }
    return "#" + colorCode
}

// Bài 7: Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi.
// sub_String("dog") => ["d","do","dog","o","og","g"]

function sub_String(str) {
    var substrArr = []
    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j <= str.length - i; j++) {
            substrArr.push(str.substr(i, j))
        }
    }
    return substrArr
}

// Bài 8: Kiểm tra mảng xem có phải mảng tăng dần hay không

function checkArrUp(arr) {
    var CloneArr = arr.slice()
    arr.sort(function (a, b) {
        return a - b
    })
    return CloneArr.join() == arr.join()
}

// Bài 9: Kiểm tra mảng xem có phải mảng sô lẻ giảm dần hay không

function checkArrOddDown(arr) {
    if (arr.some((ele) => { return ele % 2 == 0 })) {
        return false
    }
    var CloneArr = arr.slice()
    arr.sort(function (a, b) {
        return b - a
    })
    return CloneArr.join() == arr.join()
}

// Bài 10: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên). Ví dụ với tham số 53751 thì kết quả là 13557.

function min(num) {
    //Kiểm tra số nguyên
    if (!Number.isInteger(num)) {
        return false
    }
    //Tách số thành chuỗi rồi thành mảng
    var arr = num.toString().split("")
    //Nếu số âm, sắp xếp mảng giảm dần
    if (num < 0) {
        arr = arr.sort(function (a, b) {
            return b - a
        })
    }
    //Nếu số dương, sắp xếp mảng tăng dần
    if (num > 0) {
        arr = arr.sort(function (a, b) {
            return a - b
        })
        //Đếm số 0 trong mảng
        var count = 0
        for (x of arr) {
            if (x == 0) {
                count += 1
            }
        }
        //Loại bỏ số 0 khỏi mảng
        arr = arr.slice(count)
        //Ghép số 0 vào index[1]
        for (var i = 1; i <= count; i++) {
            arr.splice(1, 0, "0")
        }
    }
    //Số hóa mảng kết quả
    return Number(arr.join(''))
}