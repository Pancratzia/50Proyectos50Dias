const lista = document.querySelectorAll('.lista');
    function activoLink(){
      lista.forEach(item => item.classList.remove('activo'));
      this.classList.add('activo');
    }
    lista.forEach(item => 
      item.addEventListener('click', activoLink))