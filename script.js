let d = document;

//Generate password
function gen() {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+}{[]:;?/-=';
    var pLength = 16;
    var password = '';
    for (var i = 0; i < pLength; i++) { 
        var randNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randNum,randNum+1);
    }
    d.getElementById("psw").value = password;
}

//Copy password
function copy() {
    var ct = d.getElementById("psw");
    ct.select();
    ct.setSelectionRange(0, 999);
    navigator.clipboard.writeText(ct.value);
}