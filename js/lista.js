var nivel = confirm('¿Eres principiante en el tejido?')

if(nivel){
    var nivEnlace1=document.getElementById('principiante')
    var nivEnlace2=document.getElementById('avanzado')
    nivEnlace1.style.display = 'block'
    nivEnlace2.style.display = 'none'
}