async function digestMessage(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

text.oninput = async function(e) {
    var object = new Object();
    object.hash = await digestMessage(text.value);
    object.value = text.value;
    
    var jsonString = JSON.stringify(object);
    code.innerHTML = jsonString;

    qrcode.clear();
    qrcode.makeCode(jsonString);
}

var qrcode = new QRCode(document.getElementById("qrcode"));
