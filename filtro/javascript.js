function filtraLista() {
    const filtro = document.getElementById("filtro").value.toLowerCase();
    const lis = document.getElementsByTagName("li");

    for (const li of lis) if (li.innerText.toLowerCase().startsWith(filtro)) li.style.fontWeight = 'bold';
    else li.style.fontWeight = 'normal';

}