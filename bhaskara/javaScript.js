function click_calcular() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    const delta = (b ** 2) - (4 * a * c);

    if (delta < 0) {
        alert("Não é possivel fazer raiz de número negativo!");
    }
    else if (a == 0) {
        let dZero = (-b) / 2 * a;
        document.getElementById("resultado").innerHTML = `X1 = ${dZero}; X2 = ${dZero}.`;
    }
    else {
        let x1 = ((-b) + (Math.sqrt(delta))) / 2;
        let x2 = ((-b) - (Math.sqrt(delta))) / 2;

        document.getElementById("x1").value = x1;
        document.getElementById("x2").value = x2;
    }
}

function click_limpar() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("x1").value = x1;
    document.getElementById("x2").value = x2;

}