async function obtenerDatos(){
    let respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados")
    let datos = await respuesta.json();
    console.log(datos);

    datos.forEach(datos =>{
        console.log(datos.apellido)
        document.getElementById('table').innerHTML+=`  <tr>

        <td>${datos.nombre}  ${datos.apellido} </td>
        <td>${datos.area}</td>
        <td>${datos.domicilio}</td>
        <td class="boton-style"><button class="ver" id="${datos.id}">Ver</button></td>
        </tr>`      
}); 
    
   let btn = document.querySelectorAll(".ver");
   btn.forEach(item => {
    item.addEventListener('click', (e) => {
        mostrarUno(e.target.id);
    });
   })

} 

async function mostrarUno(id){
    let respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+id)
    let datos = await respuesta.json();
    console.log(datos);

    let empleado = document.getElementById("empleado");
    empleado.innerHTML = "";
    let nombre = document.createElement("h4");
    nombre.innerHTML = datos.nombre;

    let apellido = document.createElement("h4");
    apellido.innerHTML = datos.apellido;

    let foto = document.createElement("h4");
    foto.innerHTML = `<img src="${datos.foto}"></img>`

    
    empleado.appendChild(nombre);
    empleado.appendChild(apellido);
    empleado.appendChild(foto);

}


let txt = {
    apellido: "Alarcon",
    area: "Web Developer",
    domicilio: "Magallanes 1001. Ushuaia, Tierra del Fuego",
    foto: "https://tse4.mm.bing.net/th?id=OIP.fxCp61-TvmLvmnM5JN0xqQHaEl&pid=Api&P=0",
    id: "10",
    nombre: "Bruno"

}

async function ModificarDatos(txt){
    let res = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+txt.id,{
   method: "PUT",
   body:JSON.stringify(txt),
   headers:{"Content-type":"application/json"}

});
let data = await res.json();



} 



ModificarDatos(txt);
obtenerDatos();


