function menuoc(){
    if(menu.style.display=="none")
    {
setTimeout(() => {menu.style.display="block";}, 60);}
    else{
setTimeout(() => {menu.style.display="none";}, 60);}
}

function menuc(){
    menu.style.display="none"
    busqueda.style.display="none"
}

function busquedaoc(){
    if(busqueda.style.display=="block")
    {
setTimeout(() => {busqueda.style.display="none";}, 60);}
    else{
setTimeout(() => {busqueda.style.display="block";}, 60);}
}
