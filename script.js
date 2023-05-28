function carregar(){
    var mg = window.document.getElementById('msg')
    var ig = window.document.getElementById('image')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    mg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        ig.src = 'manha.jpg'
    } else if (hora >= 12 && hora <=18){
        ig.src='tarde.jpg'

    } else {
       ig.src='noite.jpg'
    }
}