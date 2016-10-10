
var contenedorPadre=document.getElementById("chat");
var conversa=document.getElementById("conversacion");
var input =document.getElementById("mensajes");
var papa=document.getElementById("papa");
var header =document.getElementById("head");
window.addEventListener("load",cargarPagina);
function cargarPagina(){
  input.addEventListener("keydown",enviar);
  cambio();
}
function enviar(e){
	if (e.keyCode==13){
	e.preventDefault();
     crear();
    }
}	
function crear(){
	
    var div3 =document.createElement("div");
    var div=document.createElement("div");
	var div2=document.createElement("div");
    var p=document.createElement("p");
	p.innerHTML=input.value;
    contenedorPadre.appendChild(div3);
    div3.appendChild(div);
    div.appendChild(p);
    div.appendChild(div2);
    div3.classList.add("w-message","w-message-out");
    div.classList.add("w-message-text");
    var dia = new Date();
    var hora =dia.getHours();
    var min =dia.getMinutes();
    div2.innerHTML=hora+":"+min;
}
function cambio(){
    var hijos =document.getElementsByClassName("avatar");
    var contador=0;
    for (var i=0;i<hijos.length;i++){
    	hijos[i].addEventListener("click",function(){
          var headerr =document.getElementById("head");
          headerr.classList.add("none");
          var newDiv=document.createElement("div");
          papa.insertBefore(newDiv,papa.firstElementChild);
          newDiv.innerHTML=hijos[i];
        });
   }
}



