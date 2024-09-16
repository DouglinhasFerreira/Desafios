setInterval(atualizarRelogio,1000);

function atualizarRelogio() {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        horas = "0" + minutos;
    }
    if (segundos < 10) {
        horas = "0" + segundos;
    }

    var relogioDigital = horas + ":" + minutos + ":" + segundos;

    document.getElementById("clock").innerHTML = relogioDigital;
}

atualizarRelogio();
