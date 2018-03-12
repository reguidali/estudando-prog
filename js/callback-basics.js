function caixinhaSupresa( num1, num2, callback) {
    console.log(callback(num1, num2))
}

function soma(numero1, numero2) {
    return numero1 + numero2
}

function subtracao(numero1, numero2) {
    return numero1 - numero2
}

function concatenando(numero1, numero2) {
    return numero1 + " Renata " + numero2
}

function validanumero(numero1, numero2){
    if(numero1 < numero2){
        return numero1 + numero2
    } else if (numero1 > numero2) {
        return numero1 - numero2
    } else if(numero1 == numero2){
        return numero1 + " Renata " + numero2
    } else {
        console.log("não funciona assim")
    }
}


caixinhaSupresa(2,4, soma)
caixinhaSupresa(7,5, subtracao)
caixinhaSupresa("Essa", "é doida", concatenando)
caixinhaSupresa(3, "queque",validanumero)