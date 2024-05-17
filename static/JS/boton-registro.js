document.getElementById("formRegister").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se envíe el formulario inmediatamente

  // Seleccionar todos los campos
  var usuario = document.getElementById("campo-usuario");
  var nombre = document.getElementById("campo-nombre");
  var apellido = document.getElementById("campo-apellido");
  var fecha = document.getElementById("campo-fecha");
  var email = document.getElementById("campo-email");
  var pais = document.getElementById("pais");
  var barrio = document.getElementById("barrio");
  var password = document.getElementById("campo-contraseña");
  var repetirPassword = document.getElementById("campo-repetir-contraseña");
  var terminos = document.getElementById("term-cond");

  // Borrar mensajes de error previos
  var errorElements = document.querySelectorAll(".error");
  errorElements.forEach(function(errorElement) {
      errorElement.textContent = "";
  });

  // Validar campos
  var valid = true;

  if (!usuario.value) {
      document.getElementById("campo-usuario").nextElementSibling.textContent = "Por favor, ingrese su usuario";
      valid = false;
  }
  if (!nombre.value) {
      document.getElementById("campo-nombre").nextElementSibling.textContent = "Por favor, ingrese su nombre";
      valid = false;
  }
  if (!apellido.value) {
      document.getElementById("campo-apellido").nextElementSibling.textContent = "Por favor, ingrese su apellido";
      valid = false;
  }
  if (!fecha.value) {
      document.getElementById("campo-fecha").nextElementSibling.textContent = "Por favor, ingrese su fecha de nacimiento";
      valid = false;
  }
  if (!email.value) {
      document.getElementById("campo-email").nextElementSibling.textContent = "Por favor, ingrese su email";
      valid = false;
  }
  if (!pais.value) {
      document.getElementById("pais").nextElementSibling.textContent = "Por favor, seleccione su país";
      valid = false;
  }
  if (!barrio.value) {
      document.getElementById("barrio").nextElementSibling.textContent = "Por favor, seleccione su barrio";
      valid = false;
  }
  if (!password.value) {
      document.getElementById("campo-contraseña").nextElementSibling.textContent = "Por favor, ingrese su contraseña";
      valid = false;
  }
  if (!repetirPassword.value) {
      document.getElementById("campo-repetir-contraseña").nextElementSibling.textContent = "Por favor, repita su contraseña";
      valid = false;
  }
  if (password.value && repetirPassword.value && password.value !== repetirPassword.value) {   //me aseguro que las contraseñas sean iguales
      document.getElementById("campo-repetir-contraseña").nextElementSibling.textContent = "Las contraseñas no coinciden";
      valid = false;
  }
  if (!terminos.checked) {
      document.getElementById("error-re-password").textContent = "Debe aceptar los términos y condiciones";
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