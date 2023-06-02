document.addEventListener('DOMContentLoaded', function() {
    const produtosIMG = document.querySelectorAll('.produtos img');
    const modal = document.querySelector('.modal');
    const modalImage = document.getElementById('modal-image');
  
    produtosIMG.forEach(function(image) {
      image.addEventListener('click', function() {
        modalImage.src = image.src;
        modal.style.display = 'block';
      });
    });
  
    modal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  });
  