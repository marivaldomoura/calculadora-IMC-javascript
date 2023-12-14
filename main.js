var peso = document.querySelector('#peso');
var altura = document.querySelector('#altura');
var btn = document.querySelector('#btn');
var resultado = document.querySelector('#resultado');
var soma = document.querySelector('#soma');
var btn2 = document.querySelector('#btn2');



btn.addEventListener('click', () => {

    var alt = altura.value;
    var ps = peso.value;
    let res = ps / (alt * alt).toFixed(2);
    resultado.textContent = res.toFixed(2)


    if (res < 18.5) {
        soma.textContent = " Magreza";
    }
    else if (res > 18.5 && res < 24.9) {
        soma.textContent = " Normal";
    }
    else if (res >= 25.0 && res <= 29.9) {
        soma.textContent = " Sobre peso";
    }
    else if (res >= 30.0 && res <= 39.9) {
        soma.textContent = " Obesidade";
    }
    else if (res >= 40.0) {
        soma.textContent = " Obesidade Grave";
    }
})
btn2.addEventListener('click',()=>{
    peso.value = "";
    altura.value = "";
})

