console.log("...");

function somar() {
    console.log("botão ok...");

    let X = parseInt(document.getElementById("v1").value);
    let Y = parseInt(document.getElementById("v2").value);

    let soma = 0;

    if (X < Y) {
        for (var i = X + 1; i < Y; i++) {
            if (i % 2 != 0) {
                soma += i;
            }
        }
    } else {
        for (var i= Y + 1; i < X; i++) {
            if (i % 2 != 0) {
                soma += i;
            }
        }
    }

    res.innerHTML = soma;

    console.log(X);
    console.log(Y);
    console.log(soma);
    console.log();
    console.log();
    console.log();
    
}