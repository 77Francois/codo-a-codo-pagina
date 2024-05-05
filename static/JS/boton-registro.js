let btnreg = document.querySelector("#btn");

btnreg.addEventListener('click',function(){
  Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Registro exitoso",
      showConfirmButton: false,
      timer: 1500
    });

})