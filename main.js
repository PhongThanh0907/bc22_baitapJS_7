// Bài tập 1

document.getElementById("btntimNguyenDuong").onclick = function () {
  //Đầu vào
  var S = 0;
  var n = 0;
  //Thực hiện bước nhảy và tính kết quả
  while (S < 10000) {
    n++;
    S += n;
    // Đầu ra
    document.getElementById("footertimNguyenDuong").innerHTML =
      "Số nguyên dương nhỏ nhất: " + n;
  }
};

//Bài tập 2

document.getElementById("btnketQua").onclick = function (){
    //Đầu vào
    var soX = document.getElementById("nhapX").value*1;
    var soN = document.getElementById("nhapN").value*1;
    //Thực hiện bước nhảy và tính kết quả
    var ketQua = tinhTongTich(soX, soN);
    //Đầu ra
    document.getElementById("footerketQua").innerHTML = "Tổng: " + ketQua;  
}
function tinhTongTich(X, N){    
    var T = 1;
    var S = 0;
    for(var i = 1; i <= N; i++){
        T = T * X;
        S = S + T;
    }
    return S;
}

//Bài tập 3

document.getElementById("btnGiaiThua").onclick = function (){
    //Đầu vào
    var soA = document.getElementById("soA").value*1;
    var tongS = 1;
    //Thực hiện bước nhảy và kết quả
    for(var i = 1; i <= soA; i++){
    tongS = tongS * i;
    }
    //Đầu ra
    document.getElementById("footerGiaiThua").innerHTML = "Giai thừa số A là: " + tongS;
}

//Bài tập 4

document.getElementById("btnChanLe").onclick = function(){
    //Thực hiện bước nhảy và kết quả
    var html = "";
    for(var i = 0; i < 11; i++){
        if(i % 2 === 0){
            html += '<div style="background:red; margin: 5px; padding:5px; color:#FFF">' + 'Div chẵn ' + i + '</div>';
        }else{
            html += '<div style="background:blue; margin: 5px; padding:5px; color:#FFF">' + 'Div lẽ ' + i + '</div>';
        }
    }
    //Xuất kết quả
    document.getElementById("footerChanLe").innerHTML = html;
}

// function demoDiv(){
//     for(var i = 0; i < 11; i++){
//         if(i % 2 === 0){
//             console.log("ABC");
//         }else{
//             console.log("XYZ");
//         }
//     }
// }
// demoDiv();