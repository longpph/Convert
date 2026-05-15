function convert(){
    let amount = document.getElementById('Amount').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let result;
    if (from == "USD" && to == "VND"){
        result = 'Result ' + (amount *26000).toLocaleString('vi-VN') + ' VND';
    } else if (from == "VND" && to == "USD") {
        result = 'Result ' + (amount / 26000).toLocaleString('en-US') + ' $';
    } else if (from == "VND"){
        result = 'Result ' + Number(amount).toLocaleString('vi-VN') + ' VND';
    } else {
        result = 'Result ' + Number(amount).toLocaleString('en-US') + ' $';
    }
    document.getElementById('result').innerHTML = result;
}