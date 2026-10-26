function calcularMedia(arr) {
    let soma = 0
    arr.forEach(element => {
        soma += Number(element)
    });
    return soma / arr.length
}
let notas = process.argv.slice(2)
console.log(calcularMedia(notas))


let media = calcularMedia(notas)
function verificarAprovaçao(media) {
    if (media >= 7) {
        return "Aprovado";
    }
    else if (media < 6) {
        return "reprovado";
    }
    else {
        return "recuperação";
    }
}
console.log(verificarAprovaçao(media));
