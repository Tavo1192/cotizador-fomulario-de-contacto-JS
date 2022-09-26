
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

// /*---------aca voy a colocar un carrito----------*/
//----------- esta en proceso -----todavia no funciona


class Seguros{
    constructor(id,nombre, codigo, broker){
        this.id = id;
        this.nombre = nombre;
        this.codigo = codigo;
        this.broker = broker;
       
    }
}
// const seguro = [];
// seguro.push(new Seguros(1,'SEGURO AUTOMOTOR BASE', "codigo 3948",'San Cristobal'));
// seguro.push(new Seguros(2,'SEGURO AUTOMOTOR MEDIUM', "codigo 4032",'La Caja '));
// seguro.push(new Seguros(3,'SEGURO AUTOMOTOR PREMIUM',"codigo 4235",'La Segunda'));


// for (let Seguros of seguro) {
//     let div = document.createElement("div");
//     div.innerHTML = `<form id = "FormularioSeguro">
//                     <h3>${Seguros.nombre}</h3>
//                     <p>${Seguros.broker} / ${Seguros.codigo}</p>
                    
//                     <button id ='${Seguros.id}'class="btn btn-primary my-2 col-3">Contratar</button>
                    
//                     <input class = "btn btn-dark py-2 bg-warnig my-2 col 1" type = reset value."borrar">
//                     <hr>
//                     </form>`;
        
//                     document.body.appendChild(div);
    
// };
const carritoContent = document.getElementById("carritoContent");

const productos = [
    {
        id : 1,
        nombre: 'SEGURO AUTOMOTOR BASE',
        precio: 70000,
       
        
    },
    {
        id : 2,
        nombre: 'SEGURO AUTOMOTOR MEDIUM',
        precio: 80000,
       
        
    },
    {
        id : 3,
        nombre: 'SEGURO AUTOMOTOR PREMIUM',
        precio: 90000,
       
        
    },

];

let carrito = [];

    productos.forEach((product)=> {
    let content = document.createElement("div");
    content.innerHTML = `
    
    <h3>${product.nombre}</h3>
    <p>${product.precio} $</p>`;

    carritoContent.append(content);

});










