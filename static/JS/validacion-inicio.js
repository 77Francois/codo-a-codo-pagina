document.addEventListener('DOMContentLoaded', function(){
    
    const inputEmail = document.querySelector('#campo-email');
    
    const inputPassword = document.querySelector('#campo-contraseña');

    const formInicio = document.querySelector('#formInicio');  //guarde la etiqueta formRegister dentro de la variable

    var valid = true;

    //asignacion de eventos
    
    inputEmail.addEventListener('blur', validar);
    inputPassword.addEventListener('blur', validar);
   

    function validar(e) {  //la e tiene info del evento y del elemento que dispara el evento

        limpiarAlerta(e.target.parentElement);
        
        if(e.target.value.trim() === "") {  //me aseguro de no tener el campo vacio
        
            if(e.target.id === "campo-email"){
                var campo = "email";
                // mostrarAlerta(`<span style="color: green;">El campo ${campo} es obligatorio</span>`, e.target.parentElement);
                var mensaje = `<span style="color: blue;">El campo ${campo} es obligatorio</span>`;  //nueva version para probar lasvalidaciones 
                document.getElementById("error-email").innerHTML = mensaje;
                valid = false;
            } else if(e.target.id === "campo-contraseña"){
                var campo = "contraseña";
                // mostrarAlerta(`<span style="color: green;">El campo ${campo} es obligatorio</span>`, e.target.parentElement);
                var mensaje = `<span style="color: blue;">El campo ${campo} es obligatorio</span>`;  //nueva version para probar lasvalidaciones 
                document.getElementById("error-password").innerHTML = mensaje;
                valid = false;
            }     
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

  
        if(e.target.id === "campo-email" && !validarEmail() &&  e.target.value.trim() !== ""){
            limpiarAlerta(e.target.parentElement);
            // mostrarAlerta(`<span style="color: red;">Ingrese un email valido</span>`, e.target.parentElement);
            var mensaje = `<span style="color: red;">Ingrese un email valido</span>`;  //nueva version para probar lasvalidaciones 
            document.getElementById("error-email").innerHTML = mensaje;
        }
        if(e.target.id === "campo-contraseña" && !validarContraseña() &&  e.target.value.trim() !== ""){
            limpiarAlerta(e.target.parentElement);
            // mostrarAlerta(`<span style="color: red;">La contraseña no es valido</span>`, e.target.parentElement);
            var mensaje = `<span style="color: red;">Ingrese una contraseña valida</span>`;  //nueva version para probar lasvalidaciones 
            document.getElementById("error-password").innerHTML = mensaje;
        }
    
        // Evento clic en el botón de registro
        formInicio.addEventListener('submit', function(event) {
            event.preventDefault();
            if(validarEmail() && validarContraseña()){
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