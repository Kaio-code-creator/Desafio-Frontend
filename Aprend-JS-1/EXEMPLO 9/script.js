var contador = 0
var res = document.querySelector('section#result')

function contar() {
    contador = contador + 1
    res.innerHTML (`O conatdor está em ${contador} cliques`)
}

function zerar() {
    contador = 0
    res.innerHTML = null
}

























