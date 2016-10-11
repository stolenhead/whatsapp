
var contenedorPadre=document.getElementById("chat");
var conversa=document.getElementById("conversacion");
var input =document.getElementById("mensajes");
var papa=document.getElementById("papa");
var header =document.getElementById("head");
var imagen =document.getElementById("imagen");
var texto=document.getElementById("texto");
window.addEventListener("load",cargarPagina);
function cargarPagina(){
  input.addEventListener("keydown",enviar);
  var hijos =document.querySelectorAll(".w-recent-chats li .avatar");
  
    for (var i=0;i<hijos.length;i++){
    	hijos[i].addEventListener("click",cambio);
    }
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
          var foto =this.childNodes[1].getAttribute("src");
          imagen.setAttribute("src",foto);
          var nombre =this.childNodes[3].textContent;
           texto.textContent=nombre;
          lista.classList.add("none");
          /*var conPadre =document.createElement("div");
          contenedorPadre.appendChild(conPadre);
          conPadre.classList.add("w-message-text");*/

          contenedorPadre.textContent=this.childNodes[5].textContent;
      /* contenedorPadre.classList.add("none");
          var conPadre=document.createElement("div");
          contenedorPadrea.appendChild(conPadre);
          conPadre.textContent=this.childNodes[5].textContent;*/   
}



