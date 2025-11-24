function menuoc(){busqueda.style.display="none"
    if(menu.style.display=="none")
    {
setTimeout(() => {menu.style.display="block";}, 60);}
    else{
setTimeout(() => {menu.style.display="none";}, 60);}
}

function menuc(){
    menu.style.display="none"
}

function busquedaoc(){
    if(busqueda.style.display=="block")
    {
setTimeout(() => {busqueda.style.display="none";
    q.value=""
    tableid.style.display="none"}, 60);}
    else{
setTimeout(() => {busqueda.style.display="block";}, 60);}
}

function clickendivapks(){
    busqueda.style.display="none"
    q.value=""
    tableid.style.display="none"
}

function search(){
			if (document.getElementById("q").value=="") {document.getElementById("tableid").style.display="none"}
			else{document.getElementById("tableid").style.display="block"}
			var num_cols, display, input, filter, table_body, tr, td, i, txtValue;
			num_cols = 3;
			input = document.getElementById("q");
			filter = input.value.toUpperCase();
			table_body = document.getElementById("the_table_body");
			tr = table_body.getElementsByTagName("tr");

			for(i=0; i< tr.length; i++){				
				display = "none";
				for(j=0; j < num_cols; j++){
					td = tr[i].getElementsByTagName("td")[j];
					if(td){
						txtValue = td.textContent || td.innerText;
						if(txtValue.toUpperCase().indexOf(filter) > -1){
							display = "";
						}
					}
				}
				tr[i].style.display = display;
			}
		}		

function contadordedineroinfopageopen(){
    window.location="contador de dinero.info.html"
}
function traductordetextoinfopageopen(){
    window.location="Traductor de texto info.html"
}
function codigosdeetecsainfopageopen(){
    window.location="Codigos de ETECSA info.html"
}