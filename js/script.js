window.onclick = function(e) {
    var object = new Object();
    object.value = text.value;

    var jsonString = JSON.stringify(object);
    qrcode.innerHTML = jsonString;
}

