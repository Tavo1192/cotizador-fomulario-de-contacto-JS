
    const formulario = document.querySelector("#formulario");


/*---------crear el evento--------------------*/

    formulario.addEventListener( "submit", validarFormulario);


/*mis funciones fomrulario */

    function validarFormulario(e){
        e.preventDefault();
        const nombre = document.querySelector("#nombre").value
        const telefono = document.querySelector("#telefono").value
        const email = document.querySelector("#email").value

        const respuesta = document.getElementById("respuesta");
        respuesta.textContent = `Hola ${nombre} por favor selecciona modelo y año de tu vehiculo, gracias por dejarnos tu numero ${telefono} y direccion de email`



        /*----------ingresa datos al localStorage desde formulario---------*/
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("telefono", telefono);
        localStorage.setItem("email", email);
        /*--------------recupero datos al localStorage desde formulario---------*/
        let nombreStorage = localStorage.getItem("nombre");
        let telefonoStorage = localStorage.getItem("telefono");
        let emailStorage = localStorage.getItem("email");

       console.log(nombreStorage, telefonoStorage, emailStorage );
       
        

};
      
        respuesta.textContent = "por favor ingresa los datos de tu vehiculo"

                
        
        /*--------------formulario datos vehiculo-------------------*/


        let boton = document.getElementById("button");
                boton.onclick = () => {

        let ele1 = document.getElementById("marca");
        let precio1 = parseInt(ele1.options[ele1.selectedIndex].value);
        let ele2 = document.getElementById("modelo");
        let precio2 = parseInt(ele2.options[ele2.selectedIndex].value);
        let ele3 = document.getElementById("año");
        let precio3 = parseInt(ele3.options[ele3.selectedIndex].value);

        let suma = `Total $ ${precio1 + precio2 + precio3}`;

        document.getElementById("resultado").value = suma;

/*-----------ingresa datos de formulario datos vehiculo al localStorage---------*/

        localStorage.setItem("resultado", JSON.stringify(suma));
        
        console.log(suma);
                

                if (suma === null){
                        suma = [];
                }
        alert("tu cotizacion actual es "+ "" + suma); 
              
        }

/*-----------obtengo datos del formulario datos vehiculo desde localStorage  ---------*/

        obtenerLocalstorage();

        function obtenerLocalstorage(){
            let resultado =  localStorage.getItem("resultado");
            if (localStorage.getItem("resultado")) {
                let resultado = localStorage.getItem("resultado");

                console.log(resultado)
            }
           
        }

// /*---------inicia array carrito----------*/


const productos = [
    {
        id : 1,
        nombre: 'SEGURO AUTOMOTOR BASE',
        precio: 70000,
        img:"img/seguroBase.jpeg",
       
        
    },
    {
        id : 2,
        nombre: 'SEGURO AUTOMOTOR MEDIUM',
        precio: 80000,
        img:"img/seguroMedium.jpeg",
       
        
    },
    {
        id : 3,
        nombre: 'SEGURO AUTOMOTOR PREMIUM',
        precio: 90000,
        img:`img/seguroPremiun.jpeg`, 
       
        
    },

];
/*---------inicia OPERADOR AVANZADO spread----------*/
/*---------concatena las cadenas de array que luego las muestro por consola */
const productos2 = [
    {
        id : 4,
        nombre: 'SEGURO FULL PARA TU HOGAR',
        precio: 150000,
        
       
        
    },
    {
        id : 5,
        nombre: 'SEGURO FULL PARA TU BICI',
        precio: 70000,
        
       
        
    },

];

/*-----------con esta constate mezclo lso array----*/
/*---------puedo seguir agregando productos/modificaciones desde el spread---*/

const segurosVarios = {
    ...productos,
    ...productos2
}
console.log(segurosVarios)



/*--------------comienza carrito app-------------------- */



const carritoContent = document.getElementById("carritoContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");



let carrito = [];

    productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src=${product.img}>
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
  `;

    carritoContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,

        });
        console.log(carrito)
    });
    
});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = " ";
    modalContainer.style.display = "block"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class= modal-header-title>Carrito.</h1>
    `;

    modalContainer.append(modalHeader);

   const modalbutton = document.createElement("h1");
   modalbutton.innerText = "X";
   modalbutton.className = "modal-header-button";

   modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none"
   });    

   modalHeader.append(modalbutton);


   carrito.forEach((product)=>  {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML =`
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio} $</p>
    
    `;
    modalContainer.append(carritoContent)

   });

   const total = carrito.reduce((acc, el) => acc + el.precio, 0)

   const totalCompra = document.createElement("div");
   totalCompra.className = "total-content";
   totalCompra.innerHTML = `total a pagar: ${total}`;
   modalContainer.append(totalCompra);
  
});









