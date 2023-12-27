var daySo = []
function clearInput() {
document.getElementById("nhap-so-n").value =""
  
}
function themSo() {
    var soThemVao = document.getElementById("nhap-so-n").value *1
    daySo.push(soThemVao)
    console.log("🥶 - daySo:", daySo)
    clearInput()
}

// câu 1: Tổng số dương
function tinhTong() {
    var tongCacSoDuong = 0
    for (let i = 0; i < daySo.length; i++) {
        if (daySo[i] > 0) {
            tongCacSoDuong = tongCacSoDuong + daySo[i]
        }
    }
    var ketqua = document.getElementById("tong-so-duong")
    ketqua.innerHTML = `Tổng số dương: ${tongCacSoDuong}`
}
// Câu 2: Đếm số dương trong mảng
function demSoDuong() {
   var soSoDuong = 0
    for (let i = 0; i < daySo.length; i++) {
        if (daySo[i] > 0) {
            soSoDuong++
        }
    }
    var ketqua = document.getElementById("dem-so-duong")
    ketqua.innerHTML = `Số dương: ${soSoDuong}`
}
// Câu 3: Tìm số nhỏ nhất
function soNhoNhat() {
   var soNhoNhat = daySo[0]
    for (let i = 0; i < daySo.length; i++) {
        if (soNhoNhat > daySo[i]) {
            soNhoNhat = daySo[i]
        }
    }
    var ketqua = document.getElementById("so-nho-nhat")
    ketqua.innerHTML = `Số nhỏ nhất: ${soNhoNhat}`
}
// Câu 4: Tìm số dương nhỏ nhất
function soDuongNhoNhat() {
    var daySoDuong = []
    var soDuongNhoNhat = daySoDuong[0]
    
     for (let i = 0; i < daySo.length; i++) {
         if (daySo[i] > 0) {
            daySoDuong.push(daySo[i])
         }
    }
    var soDuongNhoNhat = daySoDuong[0]
    for (let j = 0; j < daySoDuong.length; j++) {
        if (soDuongNhoNhat > daySoDuong[j]) {
            soDuongNhoNhat = daySoDuong[j]
        }
    }
    var ketqua = document.getElementById("so-duong-nho-nhat")
    
    if (daySoDuong !== null) {
        ketqua.innerHTML = `Không có số dương nào trong mảng`
    } else {
        ketqua.innerHTML = `Số dương nhỏ nhất: ${soDuongNhoNhat}`
    }
}
 // 