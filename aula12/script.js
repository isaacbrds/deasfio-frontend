
function ajustaImagens(){
    let lis = document.querySelectorAll('#carrossel .carrossel-container li');
    for(li of lis){
        li.style.width = window.innerWidth + "px";
        let imgTag = li.querySelector("img");
        imgTag.style.display = "none";
        let img = imgTag.src
        li.style.backgroundImage = "url('" + img + "')";
        li.style.backgroundSize = "cover";
        li.style.backgroundRepeat = "no-repeat";
        li.style.backgroundPosition = "center";
    }
}

function anterior(){
    document.querySelector('#carrossel div').scrollLeft -= window.innerWidth
}

function proximo(){
    document.querySelector('#carrossel div').scrollLeft += window.innerWidth
}

window.addEventListener('load', function() {
    ajustaImagens()
});

window.addEventListener('resize', function() {
    ajustaImagens()
});

function abrirMenu(botao){
    let menu = document.getElementById('menu');
    if(menu.className != 'menu-aberto'){
        menu.className = 'menu-aberto';
        botao.className = 'aberto';
    }else{
        menu.className = '';
        botao.className = '';
    }
}