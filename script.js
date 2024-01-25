const searchInput = document.getElementById('search-input')
const resultsArtist = document.getElementById('result-artist')
const resultsPlaylist = document.getElementById('result-playlists')

function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result){
    resultsPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')

    result.forEach(element => {
        artistName.innerText = element.name
        artistImage.src = element.urlImg
    });

    resultsArtist.classList.remove('hidden')
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase()
    if(searchTerm === ''){
        resultsPlaylist.classList.add('hidden')
        resultsArtist.classList.remove('hidden')
        return
    }

    requestApi(searchTerm)
})