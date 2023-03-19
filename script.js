function mostrarPersonagem(id) {

    
    document.querySelectorAll('section').forEach(function(section) {
      section.style.display = 'none'
    });
    
    // Mostre apenas o personagem selecionado
    document.getElementById(id).style.display = 'block';
    
  }
  