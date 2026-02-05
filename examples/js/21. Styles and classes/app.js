const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (!card.classList.contains('red-card')) {
            card.classList.add('red-card');
        } else {
            card.classList.remove('red-card');
        }
    });
});