function carregar(){
    var mg = window.document.getElementById('msg')
    var ig = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
         
    if (hora >= 0 && hora < 12 ){
        mg.innerHTML = `Agora são ${hora} horas Bom Dia!`
        ig.src = 'manhaa.png'
        document.body.style.background = '#0ba9daee'
    } else if (hora >= 12 && hora <=18){
        mg.innerHTML = `Agora são ${hora} horas Boa Tarde!`
        ig.src='tardee.png'
        document.body.style.background = '#f28a03'
    } else {
       mg.innerHTML = `Agora são ${hora} horas Boa Noite!`
       ig.src='noitee.png'
       document.body.style.background = '#131212'
    }
}