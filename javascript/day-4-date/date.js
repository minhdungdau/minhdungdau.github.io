// Bài 1: Viết một hàm JavaScript để lấy ngày hiện tại
// Lưu ý: Truyền dấu phân tách làm đối số.
// getCurrentDate("/") => 17/08/2020

function today(){
    var d = new Date()
    return d.getDate() + "/" + Number(d.getMonth()+1) + "/" + d.getFullYear()
}

// Bài 2: Viết một hàm JavaScript để lấy số ngày trong tháng
// getDaysInMonth(8, 2020) => 31

function getDaysInMonth(month, year){
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31
        case 4:
        case 6:
        case 9:
        case 11:
            return 30
        case 2:
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
                return 29
            }
            return 28
    }
}

// Bài 3: Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.

function isWeekend(){
    var d = new Date()
    return d.getDay()==0||d.getDay()==6
}

//Bài 4: Viết một hàm JavaScript sẽ trả về số giờ và phút theo số phút truyền vào

function convertToHour(min){
    return Math.floor(min/60) + ":" + min%60
}

// Bài 5: Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.

function countDay(){
    var d = new Date()
    var x = new Date("Jan 01, 2020")
    return Math.floor((d-x)/(24*3600*1000))
}

// Bài 6: Viết chương trình JavaScript để tính tuổi.
// calculate_age(new Date(1982, 11, 4))

function calculate_age(birthDay){ //birthDay = "year, month, date"
    var d = new Date()
    var x = new Date (birthDay)
    if (d.getMonth() >= x.getMonth() - 1 && d.getDate() >= x.getDate()){
        return d.getFullYear() - x.getFullYear()
    } else {
        return d.getFullYear() - x.getFullYear() - 1
    }
}

// Bài 7: Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
    // let dt = new Date();
    // startOfWeek(dt)
    function startOfWeek(dt){
        if (dt.getDay() == 0){
            dt.setDate(dt.getDate() - 6)
        } else {
            dt.setDate(dt.getDate() - dt.getDay() + 1)
        }
        return dt.toDateString()
    }

// Bài 8: Viết một hàm JavaScript để lấy ngày kết thúc tháng
// dt = new Date();
// endOfMonth(dt);

function endOfMonth(ct){
    ct.setDate(31)
    return ct.toDateString()
}

// Bài 9: Viết hàm đếm ngược thời gian đến tết dương lịch

function countDown(){
    var d = new Date()
    var newYear = d.getFullYear() + 1
    var x = new Date(newYear.toString(),00,01,00)
    var ngay = Math.floor((x - d)/(24*3600*1000))
    var gio = Math.floor((x - d)/(3600*1000) - ngay*24)
    var phut = Math.floor((x - d)/(60*1000) - ngay*24*60 - gio*60)
    var giay = Math.floor((x - d)/1000 - ngay*24*3600 - gio*3600 - phut*60)
    return "Còn " + ngay + " ngày " + gio + " giờ " + phut + " phút " + giay + " giây "  
}

// Bài 10: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''

function timeAdd(t,x){
    var timeArr=t.split(":")
    var time = timeArr[0]*3600 + timeArr[1]*60 + timeArr[2]*1
    var tAdd = time + x
    var gio = Math.floor(tAdd/(3600))
    var phut = Math.floor(tAdd/(60) - gio*60)
    var giay = tAdd - gio*3600 - phut*60
    return gio + ":" + phut + ":" + giay
}
