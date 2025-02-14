// Animation du header lors du défilement
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#141414';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// Simulation de données de films
const movies = [
    {
        title: "Film 1",
        image: "https://via.placeholder.com/200x300",
        description: "Description du film 1"
    },
    {
        title: "Film 2",
        image: "https://via.placeholder.com/200x300",
        description: "Description du film 2"
    },
    // Ajoutez plus de films ici
];

// Fonction pour charger plus de films (à implémenter)
function loadMoreMovies() {
    const moviesSlider = document.querySelector('.movies-slider');
    // Ajouter plus de films à la liste
}

// Ajout d'un effet de hover sur les cartes de films
const movieCards = document.querySelectorAll('.movie-card');
movieCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Ajouter des animations ou des informations supplémentaires
    });
    
    card.addEventListener('mouseleave', () => {
        // Retirer les animations ou les informations
    });
}); 