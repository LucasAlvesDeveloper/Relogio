function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'fotos/manhã.png'
        document.body.style.backgroundColor = '#fec262'
    } else if (hora < 18){
        // BOA TARDE!
        img.src = 'fotos/tarde.png'
        document.body.style.backgroundColor = '#aadcfd'
    } else {
        // BOA NOITE!
        img.src = 'fotos/noite.png'
        document.body.style.backgroundColor = '#08384f'
    }
}