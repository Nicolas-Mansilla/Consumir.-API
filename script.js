let contenedorHtml=document.getElementById("contenedor");


fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(datos =>{
                console.log(datos);
            datos.forEach(data=>{
            contenedorHtml.innerHTML+=`<div>
            <h2> Nombre de la hermosa prenda:  ${data.title}</h2>
            
            <img src="${data.image}">
            
            <p>Categoria : ${data.category}</p>
            </div>`
            })
            })













            
