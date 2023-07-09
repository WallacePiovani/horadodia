function carregar(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('foto');
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minutos}`;

    if(hora >= 0 && hora < 12){
         //bom dia
         img.src = './assets/fotomanha.jpeg';
         document.body.style.background = 'rgba(236, 207, 152, 0.973)'
    }
    else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src='./assets/fototarde.jpg';
        document.body.style.background= 'rgb(238, 167, 101)'
    }
    else{
        //boa noite
        img.src='./assets/fotonoite.jpg';
        document.body.style.background = 'rgb(75, 72, 116)'
        
    }

}


