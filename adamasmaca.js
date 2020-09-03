var words = ["detaynet", "predoova", "asmak", "adam", "kalem", "alper", "abes", "düş", "abis", "acep", "acil", "acki", "hatmi", "hatun", "heder"]
var wordSum = words.length;
var wordID = Math.floor(Math.random() * wordSum);
var key = words[wordID];
var keyLength = key.length;


//gizili array
var letterarray = key.split(""); // anahtar kelimeyi harflerine bölerek dizi yapar
var secretarray = new Array(letterarray.length);
var viewarray = new Array();

var hatasayisi = 0; //hatasayisi

//diziyi gizliyoruz
for (var j = 0; j < keyLength; j++) {
    secretarray[j] = " _  ";
}

function secret() {
    for (var i = 0; i < secretarray.length; i++) {
        var kelime = document.getElementById("kelime")
        var karakter = document.createTextNode(secretarray[i])
        kelime.appendChild(karakter)
    }
}

function oyna() {

    var letter = document.getElementById("form").elements[0].value;
    if (letterarray.includes(letter) == true) {

        for (var i = 0; i < letterarray.length; i++) {

            var a = letterarray.indexOf(letter)
            secretarray[a] = letter
            document.getElementById("kelime").innerHTML = secretarray
        }

        for (var j = letterarray.length; j > 0; j--) {
            var b = letterarray.indexOf(letter)
            if (letterarray[j] == letterarray[b]) {
                secretarray[j] = letter
                document.getElementById('metin').innerHTML = "Cok iyi gidiyorsun.."
                document.getElementById("kelime").innerHTML = secretarray

            }
        }
        if (JSON.stringify(secretarray) === JSON.stringify(letterarray)) {
            document.getElementById('metin').innerHTML = "Kazandınızz.."

        }


    } else {
        adamas()
    }
}



var kelime = document.getElementById("kelime");
kelime.innerHTML = " "
secret()

function adamas() {
    hatasayisi += 1

    switch (hatasayisi) {
        case 1:
            document.getElementById("adamresmi").src = "1.jpg";
            break;
        case 2:
            document.getElementById("adamresmi").src = "2.jpg";
            break;
        case 3:
            document.getElementById("adamresmi").src = "3.jpg";
            break;
        case 4:
            document.getElementById("adamresmi").src = "4.jpg";
            break;
        case 5:
            document.getElementById("adamresmi").src = "5.jpg";
            break;
        case 6:
            document.getElementById("adamresmi").src = "6.jpg";
            break;
        case 7:
            document.getElementById("adamresmi").src = "7.gif";
            break;

    }


    if (hatasayisi == 7) {
        document.getElementById('metin').innerHTML = "kaybettiniz"
        document.getElementById('gelenharf').innerHTML = "doğru cevap..." + key.toUpperCase()

    }
}