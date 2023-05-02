const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=01c64aa5398ca0cedf3a4fe4324070e6&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=01c64aa5398ca0cedf3a4fe4324070e6&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL)

async function getMovies(url) {
    const response = await fetch(url)
    const data = await response.json()

    console.log(data.results)
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
    } else {
        window.location.reload()
    }
})