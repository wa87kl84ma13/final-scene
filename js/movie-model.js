const movies = [
    {
        title: 'The Dark Knight',
        image: 'img/dark-knight-cover.jpg',
        genre: 'Action',
        category: 'Movies',
        score: 4.8,
        release: 2008,
        director: 'Christopher Nolan',
        review: '<input type="text" id="review-input" placeholder="Leave a comment"><button id="comment-submit">Submit</button>',
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
        director: '',
        overview: '',
        trailer: ''
    },
    {
        title: 'After Life',
        image: 'img/after-life.jpg',
        genre: 'Comedy',
        category: 'TV Shows',
        score: 4.4,
        release: 2019,
        director: 'Ricky Gervais',
        overview: '',
        trailer: ''
    },
    {
        title: 'A Quiet Place Part II',
        image: 'img/quiet-place2.jpg',
        genre: 'Horror',
        category: 'Movies',
        score: 4.2,
        release: 2021,
        director: '',
        overview: '',
        trailer: ''
    },
    {
        title: 'Venom',
        image: 'img/venom.jpg',
        genre: 'Action',
        category: 'Movies',
        score: 2.4,
        release: 2018,
        director: '',
        overview: '',
        trailer: ''
    },
    {
        title: 'Tenet',
        image: 'img/tenet.jpg',
        genre: 'Action',
        category: 'Movies',
        score: 2.9,
        release: 2020,
        director: '',
        overview: '',
        trailer: ''
    },
    {
        title: 'The Godfather',
        image: 'img/godfather.jpg',
        genre: 'Crime',
        category: 'Movies',
        score: 5.0,
        release: 1972,
        director: '',
        overview: '',
        trailer: ''
    },
    {
        title: 'The Godfather II',
        image: 'img/godfather-2.jpg',
        genre: 'Crime',
        category: 'Movies',
        score: 5.0,
        release: 1974,
        director: '',
        overview: '',
        trailer: ''
    },
    {
        title: 'Scarface',
        image: 'img/scarface.jpg',
        genre: 'Crime',
        category: 'Movies',
        score: 5.0,
        release: 1983,
        director: '',
        overview: '',
        trailer: ''
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
    movieDirector.textContent = `${movie.director}`;
    // Movie overview
    const movieOverview = document.createElement('p');
    movieOverview.classList.add('movie-overview');
    movieOverview.textContent = `${movie.overview}`;
    // Movie trailer
    const movieTrailer = document.createElement('iframe');
    movieTrailer.classList.add('movie-trailer');
    movieTrailer.src = `${movie.trailer}`;
    movieText.append(movieHeading, movieDirector, movieOverview, movieTrailer);
    // Append to movie info container
    movieInfoContainer.append(movieImageContainer, movieText);
    // Append to movie info
    movieInfo.append(closeModal, movieInfoContainer);
    // Append all to movie container
    movieContainer.append(movieBlock, movieInfo);
});
// movies.forEach((movie) => {
//     movieContainer.innerHTML += 
//         `<div class="movie-shows-block">
//             <img src="${movie.image}" alt="">
//             <span class="movie-show-score">${movie.score.toFixed(1)}</span>
//             <h4>${movie.title}</h4>
//         </div>
//         <div class="movie-info-content">
//         <div class="close-movie-modal">+</div>
//             <div class="movie-info-container">
//             <div class="movie-image">
//               <img src="${movie.image}" alt="">
//               <h3><span class="release-span-text">Release date:</span> ${movie.release}</h3>
//             </div>
//             <div class="movie-info">
//               <h2>${movie.title}</h2>
//               <p>Director: ${movie.director}</p>
//               <p class="movie-overview">${movie.overview}</p>
//               ${movie.trailer}
//               <h4 class="review-heading">Comments</h4>
//               ${movie.review}
//               <div id="comments-container"></div>
//             </div>
//             </div>
//         </div>`;
// });

// const commentInput = document.getElementById('review-input');
// const commentSubmit = document.getElementById('comment-submit');
// const commentsContainer = document.getElementById('comments-container');

// function addComment() {
//     let comment = document.createElement('p');
//     comment.className = 'review-text';
//     comment.append(commentInput.value);
//     commentsContainer.appendChild(comment);
//     commentInput.value = '';
// }

// commentSubmit.addEventListener('click', addComment);

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