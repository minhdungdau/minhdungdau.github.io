//1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F,
// tham số truyền vào là 1 số nguyên biểu thị độ C. Ví dụ tham số truyền vào là -30 thì kết quả trả về là -22.

const convertToFahrenheit = (celcius) =>  celcius*1.8 + 32

//2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.

let arr = [7, 8, 3, 5, 1, 15, 12]
const max2nd = (array) => {
    return array.sort(function(a,b){return b - a})[1]
}
console.log(max2nd(arr))

//3: Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất.

function longestStr(array) {
    let new_arr = array.map(ele => ele.length)
    let longest = Math.max(...new_arr)
    return array[new_arr.indexOf(longest)]
}

//4: Viết hàm có 2 tham số là 2 chuỗi string và target khác rỗng, dùng để kiểm tra chuỗi string
//có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.

function checkExist(str, sub_str) {
    return str.endsWith(sub_str)
}

//5: Cho 1 mảng chỉ chứa các phần tử có kiểu dữ liệu number, string và boolean. Hãy kiểm tra xem
// trong mảng đó có phần tử nào bị lặp lại hay không (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp) hoặc false (nếu không lặp).

function checkRepeat (array) {
    let arr_nodup = array.filter((ele, index) => index == array.indexOf(ele))
    return arr_nodup.length == array.length
}