document.addEventListener('DOMContentLoaded', function(){
    const inputUsuario = document.querySelector('#campo-usuario');
    const inputNombre = document.querySelector('#campo-nombre');
    const inputApellido = document.querySelector('#campo-apellido');
    const inputFecha = document.querySelector('#campo-fecha');
    const inputEmail = document.querySelector('#campo-email');
    const inputPais = document.querySelector('#pais');
    const inputBarrio = document.querySelector('#barrio');
    const inputPassword = document.querySelector('#campo-contraseña');
    const inputrRePassword = document.querySelector('#campo-repetir-contraseña');
    const checkboxTerminos = document.querySelector('#term-cond'); // Agregamos el checkbox de aceptar términos y condiciones
    const formRegister = document.querySelector('#formRegister');  //guarde la etiqueta formRegister dentro de la variable

    var valid = true;

    //asignacion de eventos
    inputUsuario.addEventListener('blur', validar);
    inputNombre.addEventListener('blur', validar);
    inputApellido.addEventListener('blur', validar);
    inputFecha.addEventListener('blur', validar);
    inputEmail.addEventListener('blur', validar);
    inputPassword.addEventListener('blur', validar);
    inputrRePassword.addEventListener('blur', validar);
    
    

    function validar(e) {  //la e tiene info del evento y del elemento que dispara el evento

        limpiarAlerta(e.target.parentElement);
        
        if(e.target.value.trim() === "") {  //me aseguro de no tener el campo vacio
        
            if(e.target.id === "campo-usuario"){
                var campo = "usuario";
                // mostrarAlerta(`<span style="color: violet;">El campo ${campo} es obligatorio</span>`, e.target.parentElement);
                var mensaje = `<span style="color: violet;">El campo ${campo} es obligatorio</span>`;  //nueva version para probar las validaciones 
                document.getElementById("error-usuario").innerHTML = mensaje;
                valid = false;
            } else if(e.target.id === "campo-nombre"){
                var campo = "nombre";
                // mostrarAlerta(`<span style="color: green;">El campo ${campo} es obligatorio</span>`, e.target.parentElement);
                var mensaje = `<span style="color: violet;">El campo ${campo} es obligatorio</span>`;  //nueva version para probar las validaciones 
                document.getElementById("error-nombre").innerHTML = mensaje;
                valid = false;
            } else if(e.target.id === "campo-apellido"){
                var campo = "apellido";
                // mostrarAlerta(`<span style="color: green;">El campo ${campo} es obligatorio</span>`, e.target.parentElement);
                var mensaje = `<span style="color: violet;">El campo ${campo} es obligatorio</span>`;  //nueva version para probar las validaciones 
                document.getElementById("error-apellido").innerHTML = mensaje;
                valid = false;
            } else if(e.target.id === "campo-fecha"){
                var campo = "fecha";
                // mostrarAlerta(`<span style="color: green;">El campo ${campo} es obligatorio</span>`, e.target.parentElement);
                var mensaje = `<span style="color: violet;">El campo ${campo} es obligatorio</span>`;  //nueva version para probar las validaciones 
                document.getElementById("error-fecha").innerHTML = mensaje;
                valid = false;
            } else if(e.target.id === "campo-email"){
                var campo = "email";
                // mostrarAlerta(`<span style="color: green;">El campo ${campo} es obligatorio</span>`, e.target.parentElement);
                var mensaje = `<span style="color: violet;">El campo ${campo} es obligatorio</span>`;  //nueva version para probar las validaciones 
                document.getElementById("error-email").innerHTML = mensaje;
                valid = false;
            } else if(e.target.id === "campo-contraseña"){
                var campo = "contraseña";
                // mostrarAlerta(`<span style="color: green;">El campo ${campo} es obligatorio</span>`, e.target.parentElement);
                var mensaje = `<span style="color: violet;">El campo ${campo} es obligatorio</span>`;  //nueva version para probar las validaciones 
                document.getElementById("error-password").innerHTML = mensaje;
                valid = false;
            } else if(e.target.id === "campo-repetir-contraseña"){
                var campo = "repetir contraseña";
                // mostrarAlerta(`<span style="color: green;">El campo ${campo} es obligatorio</span>`, e.target.parentElement);
                var mensaje = `<span style="color: violet;">El campo ${campo} es obligatorio</span>`;  //nueva version para probar las validaciones 
                document.getElementById("error-re-password").innerHTML = mensaje;
                valid = false;
            }else if(!checkboxTerminos.checked){
                mostrarAlerta(`<span style="color: violet;">El campo terminos y condiciones es obligatorio</span>`, e.target.parentElement);
                valid = false;
            }
            

            
            
        } 
        
        function validarNombre(){
            const nombre = inputNombre.value.trim(); // Obtener el valor de input de nombre
            const val = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // valores de validacion 
            return val.test(nombre); 
        }
        function validarApellido(){
            const apellido = inputApellido.value.trim();
            const val = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ 
            return val.test(apellido); 
        }
        function validarEmail(){
            const email =  inputEmail.value.trim();
            const val = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            return val.test(email); 
        }
        function validarContraseña(){
            const contraseña = inputPassword.value.trim();
            const val = /^.{4,12}$/;     // 4 a 12 digitos.
            return val.test(contraseña); 
        }
        function validarRepetirContraseña(){
            const reContraseña = inputrRePassword.value.trim();
            const val = /^.{4,12}$/ // 4 a 12 digitos.
            return val.test(reContraseña); 
        }


        if(e.target.id === "campo-nombre" && !validarNombre() &&  e.target.value.trim() !== ""){
            limpiarAlerta(e.target.parentElement);
            // mostrarAlerta(`<span style="color: red;">Ingrese un nombre valido</span>`, e.target.parentElement);
            var mensaje = `<span style="color: red;">Ingrese un nombre valido</span>`;
            document.getElementById("error-nombre").innerHTML = mensaje;
        }
        if(e.target.id === "campo-apellido" && !validarApellido() &&  e.target.value.trim() !== ""){
            limpiarAlerta(e.target.parentElement);
            // mostrarAlerta(`<span style="color: red;">Ingrese un apellido valido</span>`, e.target.parentElement);
            var mensaje = `<span style="color: red;">Ingrese un apellido valido</span>`;
            document.getElementById("error-apellido").innerHTML = mensaje;
       }
        // if(e.target.id === 'campo-fecha' && !validarFecha)  para este campo no es necesario
        if(e.target.id === "campo-email" && !validarEmail() &&  e.target.value.trim() !== ""){
            limpiarAlerta(e.target.parentElement);
            var mensaje = `<span style="color: red;">Ingrese un email valido</span>`;
            document.getElementById("error-email").innerHTML = mensaje;
        }
        if(e.target.id === "campo-contraseña" && !validarContraseña() &&  e.target.value.trim() !== ""){
            limpiarAlerta(e.target.parentElement);
            // mostrarAlerta(`<span style="color: red;">La contraseña no es valido</span>`, e.target.parentElement);
            var mensaje = `<span style="color: red;">La contraseña no es valida</span>`;  //nueva version para probar las validaciones 
            document.getElementById("error-password").innerHTML = mensaje;
        }
        if(e.target.id === "campo-repetir-contraseña" &&  e.target.value.trim() !== ""){
            limpiarAlerta(e.target.parentElement);
            if(document.getElementById("campo-repetir-contraseña").value !== document.getElementById("campo-contraseña").value){   // si usaba el campo 'campo-contraseña' me mostraba el mensaje de error del campo repetir-contraseña
                // mostrarAlerta(`<span style="color: red;">Debe ser igual a la contraseña antes ingresada</span>`, e.target.parentElement);
                var mensaje = `<span style="color: red;">Debe ser igual a la contraseña antes ingresada</span>`; 
                document.getElementById("error-re-password").innerHTML = mensaje;
            }
        }
        if(e.target.id === "term-cond"){
            limpiarAlerta(e.target.parentElement);
            if(!checkboxTerminos.checked){
                mostrarAlerta('Debe aceptar los terminos y condiciones', e.target.parentElement); 
            }   // no se ve que lo haga
        }

       
        
        // Evento clic en el botón de registro
        formRegister.addEventListener('submit', function(event) {
            event.preventDefault();
            if(validarNombre() && validarApellido() && validarEmail() && validarContraseña() && validarRepetirContraseña() && checkboxTerminos.checked){
                valid = true;
                mostrarMensajeExito();
            }else {
                valid = false;
                mostrarMensajeError();
                
                
            }
        });
        limpiarAlerta(e.target.parentElement);
        return;
    }
    
    
    function mostrarAlerta(mensaje, elementoPadre) {   
        // Limpiar alerta anterior si existe
        limpiarAlerta(elementoPadre);
    
        // Crear elemento para el mensaje
        var alerta = document.createElement('span');
        
        // Establecer el mensaje HTML
        alerta.innerHTML = mensaje;
        
        // Agregar clases al elemento
        alerta.classList.add('text-green');
        // Insertar el mensaje en el elemento padre
        elementoPadre.appendChild(alerta);
        return;
    }

    function limpiarAlerta(referencia){
        // compruebo si existe alguna alerta
        const alerta = referencia.querySelector('.text-green')
        if(alerta){
            alert.remove();
        }
        return;
    }
    function mostrarMensajeExito(){
        Swal.fire({
            icon: 'success',
            iconColor: 'rgb(47, 7, 47)',
            title: 'Excelente!',
            text: 'Te has registrado exitosamente!!!',
            timer: 3500,
            showConfirmButton: true, // Muestra el botón de confirmación
        })//.then(() => {
           // formRegister.submit();
        //}); elimine esta parte porque el mensje pasaba tan rapido que no podia verse
        return;
    }
    function mostrarMensajeError(){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salio mal!",
          footer: '<a href="#">Hay campos incompletos</a>',
          showConfirmButton: true, // Muestra el botón de confirmación
        });
        return;
    }
    return;
    
});