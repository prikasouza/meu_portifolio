var button = document.getElementById('card-btn');

button.addEventListener('click', function() {
    
    var card = document.querySelector('.card');

    
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
    
        return button.textContent = 'Ver Menos';
    }
    
    
    button.textContent = 'Saiba Mais';
});