function calSalary(){
    let salary = Number(document.getElementById("oneDaySalary").value) * Number(document.getElementById("dayWork").value);
    document.getElementById("resultB1").innerHTML = "Kết quả: " + salary;
}

function calAvg(){
    let average = (Number(document.getElementById("1stNo").value)+
    Number(document.getElementById("2ndNo").value)+
    Number(document.getElementById("3rdNo").value)+
    Number(document.getElementById("4thNo").value)+
    Number(document.getElementById("5thNo").value))/5;
    document.getElementById("resultB2").innerHTML = "Kết quả: " + average;
}

function curExchange(){
    const curInterest = 23500;
    let VNDcurrency = Number(document.getElementById("currency").value) * curInterest;
    document.getElementById("resultB3").innerHTML = "Kết quả: " + new Intl.NumberFormat('vn-VN').format(VNDcurrency) + " VND";
}

function calDimension(){
    let circumstance = (Number(document.getElementById("lengthRec").value) + Number(document.getElementById("widthRec").value)) *2;
    let area = Number(document.getElementById("lengthRec").value) * Number(document.getElementById("widthRec").value);
    document.getElementById("resultB4").innerHTML = "Kết quả: </br> + Diện tích: " + area+ "</br> + Chu vi: " + circumstance;
}

function calTwo(){
    let twoNumber = Number(document.getElementById("twoNo").value);
    let addedNumber = twoNumber % 10 + Math.floor(twoNumber / 10);
    document.getElementById("resultB5").innerHTML = "Kết quả: " + addedNumber;
}