document.addEventListener("DOMContentLoaded", function () {
    function calcularIMC() {
        let peso = parseFloat(document.getElementById("peso").value);
        let altura = parseFloat(document.getElementById("altura").value);
        let resultado = document.getElementById("resultado");
        let interpretacion = document.getElementById("resumen");

        if (!peso || !altura || altura <= 0) {
            resultado.innerText = "Por favor, ingresa valores válidos.";
            interpretacion.innerText = "";
            return;
        }

        let imc = (peso / (altura * altura)).toFixed(2);
        resultado.innerText = `Tu IMC es: ${imc}`;

        let mensaje = "";
        if (imc < 18.5) {
            mensaje = "Bajo peso";
        } else if (imc < 24.9) {
            mensaje = "Peso normal";
        } else if (imc < 29.9) {
            mensaje = "Sobrepeso";
        } else {
            mensaje = "Obesidad";
        }

        interpretacion.innerText = `resumen: ${mensaje}`;
    }

    document.querySelector("button").addEventListener("click", calcularIMC);
});
