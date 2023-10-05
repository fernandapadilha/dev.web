function tabuada() {
    const multiplicador = Number(document.getElementById("mult").value);
    const multiplicando = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    document.getElementById("resultado").innerHTML = '';

    for (const numero of multiplicando) {
        let produto = multiplicador * numero;
        document.getElementById("resultado").innerHTML += `${multiplicador} x ${numero} = ${produto} <br>`;
    }
}