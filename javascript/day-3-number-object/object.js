//Bài 6. Viết hàm để lấy danh sách các key của object
function key(obj){
    var arr = []
    for (x in obj){
        arr.push(x)
    }
    return arr.join()
}

//Bài 7. Viết hàm để lấy danh sách các value của object

function key(obj){
    var arr = []
    for (x in obj){
        arr.push(obj[x])
    }
    return str.join()
}

//bài 8. Viết hàm kiểm tra key có tồn tại trong Object không

// function keyCheck(obj,keyy){
//     var TG = 0
//     for (let x in obj){
//         if (keyy == x){
//             TG = 1
//         }
//     }
//     return TG == 1
// }
function keyCheck(obj,keyy){
    for (let x in obj){
        if (keyy == x){
           return true
        }
    }
    return false
}

//bài 9. Viết hàm kiểm tra Object có độ dài bao nhiêu

function objLength(obj){
    var dem = 0
    for (x in obj){
        dem+=1
    }
    return dem
}

// Bài 10. Cho mảng các user
// mỗi object có cấu trúc như sau
// user = {
//     name : string,
//     age : number,
//     isStatus : bool
// }

// Viết function lấy ra những user có tuổi > 25 và isStatus = true

function userCheck(user){
    var userChecked=[]
    for ( i = 0; i < user.length; i++){
        if (user[i].age > 25 && user[i].isStatus == true){
            userChecked.push(user[i])
        }
    }
    return userChecked
}

// Bài 11. Tương tự bài 5
// Viết function sắp xếp các user theo tuổi tăng dần

function userSort(user){
    for ( i = 0; i < user.length - 1; i++){
        for ( j = i + 1; j < user.length; j++){
            if (user[i].age > user[j].age){
                var TG = user[i].age
                user[i].age = user[j].age
                user[j].age = TG
            } 
        }
    }
    return user
}