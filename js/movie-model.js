const movies = [
    {
        title: 'The Dark Knight',
        image: 'img/dark-knight-cover.jpg',
        genre: 'Action',
        category: 'Movies',
        score: 4.8,
        release: 2008,
        director: 'Christopher Nolan',
        overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        trailer: 'https://www.youtube.com/embed/LDG9bisJEaI'
    },
    {
        title: 'Goodfellas',
        image: 'img/goodfellas.jpg',
        genre: 'Crime',
        category: 'Movies',
        score: 5.0,
        release: 1990,
        director: 'Martin Scorsese',
        overview: 'In 1955, youngster Henry Hill becomes enamored of the criminal life and Mafia presence in his working class Italian-American neighborhood in Brooklyn.',
        trailer: 'https://www.youtube.com/embed/2ilzidi_J8Q'
    },
    {
        title: 'After Life',
        image: 'img/after-life.jpg',
        genre: 'Comedy',
        category: 'TV Shows',
        score: 4.4,
        release: 2019,
        director: 'Ricky Gervais',
        overview: 'After Life is a British black comedy-drama streaming television series created, written, produced, and directed by Ricky Gervais, who plays lead character Tony Johnson.',
        trailer: 'https://www.youtube.com/embed/eIGGKSHMQOM'
    },
    {
        title: 'A Quiet Place Part II',
        image: 'img/quiet-place2.jpg',
        genre: 'Horror',
        category: 'Movies',
        score: 4.2,
        release: 2021,
        director: 'John Krasinski',
        overview: 'During a little league game, the Abbott family wife Evelyn, husband Lee, deaf daughter Regan, and sons Marcus and Beau and other spectators witness a strange asteroid-like object hurtle towards the Earth.',
        trailer: 'https://www.youtube.com/embed/BpdDN9d9Jio'
    },
    {
        title: 'Venom',
        image: 'img/venom.jpg',
        genre: 'Action',
        category: 'Movies',
        score: 2.4,
        release: 2018,
        director: 'Ruben Fleischer',
        overview: 'While exploring space for new habitable worlds, a probe belonging to the bio-engineering corporation Life Foundation discovers a comet covered in symbiotic lifeforms.',
        trailer: 'https://www.youtube.com/embed/u9Mv98Gr5pY'
    },
    {
        title: 'Tenet',
        image: 'img/tenet.jpg',
        genre: 'Action',
        category: 'Movies',
        score: 2.9,
        release: 2020,
        director: 'Christopher Nolan',
        overview: 'A CIA agent, the "Protagonist", participates in an extraction operation at the Kyiv opera house. After seizing an artifact, the Protagonist is captured by mercenaries.',
        trailer: 'https://www.youtube.com/embed/L3pk_TBkihU'
    },
    {
        title: 'The Godfather',
        image: 'img/godfather.jpg',
        genre: 'Crime',
        category: 'Movies',
        score: 5.0,
        release: 1972,
        director: 'Francis Ford Coppola',
        overview: 'In 1945 New York City, at his daughter Connie\'s wedding to Carlo, Vito Corleone, the Don of the Corleone crime family listens to requests. His youngest son, Michael, who was a Marine during World War II, introduces his girlfriend, Kay Adams, to his family at the reception.',
        trailer: 'https://www.youtube.com/embed/sY1S34973zA'
    },
    {
        title: 'The Godfather Part II',
        image: 'img/godfather-2.jpg',
        genre: 'Crime',
        category: 'Movies',
        score: 5.0,
        release: 1974,
        director: 'Francis Ford Coppola',
        overview: 'The Godfather Part II is a 1974 American epic crime film produced and directed by Francis Ford Coppola from the screenplay co-written with Mario Puzo, starring Al Pacino, Robert Duvall, Diane Keaton, Robert De Niro, Talia Shire, Morgana King, John Cazale, Mariana Hill, and Lee Strasberg. It is the second installment in The Godfather trilogy.',
        trailer: 'https://www.youtube.com/embed/9O1Iy9od7-A'
    },
    {
        title: 'Scarface',
        image: 'img/scarface.jpg',
        genre: 'Crime',
        category: 'Movies',
        score: 5.0,
        release: 1983,
        director: 'Brian De Palma',
        overview: 'In 1980, Cuban refugee and ex-convict Tony Montana arrives in Miami, Florida, as part of the Mariel boatlift, where he is sent to a refugee camp with friends Manny Ray, Angel, and Chi Chi.',
        trailer: 'https://www.youtube.com/embed/cv276Wg3e7I'
    },
];

const movieContainer = document.getElementById('movie-container');
const movieModal = document.getElementById('movie-modal');
const movieTab = document.getElementById('movies-tab');

movies.forEach((movie) => {
    // Movie block
    const movieBlock = document.createElement('div');
    movieBlock.classList.add('movie-shows-block');
    // Movie image
    const movieImage = document.createElement('img');
    movieImage.src = `${movie.image}`;
    // Movie score
    const movieScore = document.createElement('span');
    movieScore.classList.add('movie-show-score');
    movieScore.textContent = `${movie.score.toFixed(1)}`;
    // Movie title
    const movieTitle = document.createElement('h4');
    movieTitle.textContent = `${movie.title}`;
    // Append to movie block
    movieBlock.append(movieImage, movieScore, movieTitle);
    // Movie info
    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie-info-content');
    // Movie close modal
    const closeModal = document.createElement('div');
    closeModal.classList.add('close-movie-modal');
    closeModal.textContent = '+';
    // Movie info container
    const movieInfoContainer = document.createElement('div');
    movieInfoContainer.classList.add('movie-info-container');
    // Movie info image container
    const movieImageContainer = document.createElement('div');
    movieImageContainer.classList.add('movie-image');
    const infoImage = document.createElement('img');
    infoImage.src = `${movie.image}`;
    // Movie release
    const movieRelease = document.createElement('h3');
    movieRelease.textContent = `${movie.release}`;
    const movieReleaseSpan = document.createElement('span');
    movieReleaseSpan.classList.add('release-span-text');
    movieReleaseSpan.textContent = 'Release date: ';
    movieRelease.prepend(movieReleaseSpan);
    // Append image to image container
    movieImageContainer.append(infoImage, movieRelease);
    // Movie text info
    const movieText = document.createElement('div');
    movieText.classList.add('movie-info');
    // Movie title
    const movieHeading = document.createElement('h2');
    movieHeading.textContent = `${movie.title}`;
    // Movie director
    const movieDirector = document.createElement('p');
    movieDirector.textContent = `Director: ${movie.director}`;
    // Movie overview
    const movieOverview = document.createElement('p');
    movieOverview.classList.add('movie-overview');
    movieOverview.textContent = `${movie.overview}`;
    // Movie trailer
    const movieTrailer = document.createElement('iframe');
    movieTrailer.classList.add('movie-trailer');
    movieTrailer.src = `${movie.trailer}`;
    // Sign in button
    const movieLoginBtn = document.createElement('a');
    movieLoginBtn.classList.add('movie-login-btn');
    movieLoginBtn.textContent = 'Sign in to watch';
    movieText.append(movieHeading, movieDirector, movieOverview, movieTrailer, movieLoginBtn);
    // Append to movie info container
    movieInfoContainer.append(movieImageContainer, movieText);
    // Append to movie info
    movieInfo.append(closeModal, movieInfoContainer);
    // Append all to movie container
    movieContainer.append(movieBlock, movieInfo);
});

const moviesBlock = document.querySelectorAll('.movie-shows-block');
const closeMovieModal = document.querySelectorAll('.close-movie-modal');
const movieInfo = document.querySelectorAll('.movie-info-content');

moviesBlock.forEach((block) => {
    block.addEventListener('click', function() {
        let movieInfo = this.nextElementSibling;
        movieInfo.classList.add('show-movie-content');
        movieModal.style.display = 'block';
    });
});

closeMovieModal.forEach((close) => {
    close.addEventListener('click', function() {
        movieInfo.forEach((info) => {
            info.classList.remove('show-movie-content');
        });
        movieModal.style.display = 'none';
    });
});

const scores = document.querySelectorAll('.movie-show-score');

scores.forEach((score) => {
    if(score.textContent < 2.5) {
        score.style.color = 'red';
    } else if (score.textContent < 4) {
        score.style.color = 'orange';
    } else {
        score.style.color = 'springgreen';
    }
});

document.addEventListener('click', (e) => {
    if(e.target === movieModal) {
        movieInfo.forEach(info => {
            info.classList.remove('show-movie-content');
        });
        movieModal.style.display = 'none';
    }
});