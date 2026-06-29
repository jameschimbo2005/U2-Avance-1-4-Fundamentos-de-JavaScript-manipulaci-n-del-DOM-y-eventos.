const formulario=document.getElementById("formulario");

const lista=document.getElementById("lista");

const mensaje=document.getElementById("mensaje");

const contador=document.getElementById("contador");

let total=0;

formulario.addEventListener("submit",function(e){

e.preventDefault();

const nombre=document.getElementById("nombre").value.trim();

const descripcion=document.getElementById("descripcion").value.trim();

const categoria=document.getElementById("categoria").value.trim();

if(nombre=="" || descripcion=="" || categoria==""){

mensaje.innerHTML="<div class='alert alert-danger'>Todos los campos son obligatorios.</div>";

return;

}

mensaje.innerHTML="<div class='alert alert-success'>Registro agregado correctamente.</div>";

const tarjeta=document.createElement("div");

tarjeta.className="card item p-3";

tarjeta.innerHTML=`
<h5>${nombre}</h5>
<p>${descripcion}</p>
<p><strong>Categoría:</strong> ${categoria}</p>

<button class="btn btn-danger eliminar">
Eliminar
</button>
`;

lista.appendChild(tarjeta);

total++;

contador.textContent=total;

tarjeta.querySelector(".eliminar").addEventListener("click",function(){

tarjeta.remove();

total--;

contador.textContent=total;

});

formulario.reset();

});