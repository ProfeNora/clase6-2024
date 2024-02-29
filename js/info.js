var grupoImagenes = []

grupoImagenes[0]=['productos.html','img/bella.jpeg']
grupoImagenes[1]=['productos.html','img/patitalulu.jpeg']
grupoImagenes[2]=['productos.html','img/kitty.jpg']

var vinculo=document.getElementById('vinculo_info')
var imagen=document.getElementById('imagen_info')

vinculo.href= grupoImagenes[0][0]
imagen.src=grupoImagenes[0][1]
var inicio=0
function actualizarImg(){
    inicio++
    if(inicio>2){
        inicio=0
    }
    vinculo.href=grupoImagenes[inicio][0]
    imagen.src=grupoImagenes[inicio][1]
}

setInterval(actualizarImg,3000)
