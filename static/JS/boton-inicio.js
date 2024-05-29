document.getElementById("formInicio").addEventListener("submit", function(event) {
  event.preventDefault(); // Evito que se envíe el formulario inmediatamente

  // Seleccionar todos los campos
  var email = document.getElementById("campo-email");
  var password = document.getElementById("campo-contraseña");
  // Borrar mensajes de error previos
  var errorElements = document.querySelectorAll(".error");
  errorElements.forEach(function(errorElement) {
       errorElement.textContent = "";
  });

  // Validar campos
  var valid = true;

  if (!email.value) {
      document.getElementById("campo-email").nextElementSibling.textContent = "Por favor, ingrese su email";   //no aparece como quiero
      valid = false;
  }
  if(!password.value){
    document.getElementById("campo-contraseña").nextElementSibling.textContent = "Por favor, ingrese su contraseña";   //no aparece como quiero
      valid = false;
  }
  // Si todos los campos son válidos
  if (valid) {
    Swal.fire({
        icon: 'success',
        iconColor: 'rgb(47, 7, 47)',
        title: 'Excelente!',
        text: 'Te has registrado exitosamente!!!',
        timer: 3500,
    }).then(() => {
        // Enviar el formulario
        event.target.submit();
    });
  }
  
});









// function showAlert(){
//   Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     iconColor: 'rgb(23, 67, 50)',
//     title: 'Excelente!',
//     text: 'Se inicio sesion exitosamente!!!',
//     timer: 15000,
//   })
// }