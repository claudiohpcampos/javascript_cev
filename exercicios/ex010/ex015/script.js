function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length ==0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/foto-menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/foto-menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<strong>Detectamos ${genero} com ${idade} anos.</strong></br>`
        res.appendChild(img)
    }
}