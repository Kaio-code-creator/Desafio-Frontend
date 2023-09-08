function calcular() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi o primeiro nota de ${nome}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    med = (n1 + n2)/2
    let msg
    if(med >= 6) {
        msg = 'Meus parabéns!'
    } else {
        msg = 'Estude um pouco mais'
    }
    let res = document.querySelector('section#res')
    res.innerHTML = `<p>Calculando a média final de ${nome}</p>`
    res.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}.</p>`
    res.innerHTML += `<p>A média final será ${med}.</p>`
    res.innerHTML += `<p>A mensagem que temos é:<strong> ${msg} </strong></p>`
    
}

