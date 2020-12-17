// Bài 1: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất.
// Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].

const longestStr = (arr) => {
    let lengthArr = arr.map(ele => ele.length)
    maxLength = Math.max(...lengthArr)
    return arr.filter(ele => ele.length == maxLength)
}

// Bài 2: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên), kết quả trả về là 1 mảng 
// chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào.
// Ví dụ truyền vào   [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].

function diffArr(arr1, arr2) {
    let concatArr = arr1.concat(arr2)
    //Filter different elements of concatArr from arr2
    let newDiffArr = concatArr.filter(ele => arr2.every(value => value != ele))
    newDiffArr = newDiffArr.concat(concatArr.filter(ele => arr1.every(value => value != ele)))
    return newDiffArr
}

// Bài 3: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp (tính từ 1)
//  theo kiểu ziczac. 
// Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].

function creatArr(m, n) {
    let arr = [...Array(m)].map(x => Array(n).fill(0))       
    let x = 0
    for (let i = 0; i < m; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < n; j++) {
                arr[i][j] = x
                x++
            }
        } else {
            for (let j = n - 1; j >= 0; j--) {
                arr[i][j] = x
                x++
            }
        }
    }
    return arr
}

// Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. 
// Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.

function averageAge (arr) {
    let sumAge = 0
    arr.forEach(ele => {
        sumAge += ele.age
    })
    return sumAge / arr.length
}

// Bài 5: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. 
// Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.

function arrangeAge (arr) {
    return arr.sort((a, b) => b.age - a.age)
}

// Bài 6: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. 
// Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).

function arrangeName (arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name))
}

// Bài 7: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
// Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.

function filterH (arr) {
    return arr.filter(ele => ele.name.startsWith('H')||ele.name.startsWith('h'))
}