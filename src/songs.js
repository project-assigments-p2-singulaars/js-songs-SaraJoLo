//Exercise 1: Get the array of all Artists.
function getAllArtists(song){
    let result = getAllArtists.map(song => song.artist);
    console.log(result);
    return result;
    
};

//Exercise 2: función getSongsFromArtist() -> retorna todo el objeto que contiene las canciones de un artista determinado.
function getSongsFromArtist(array, artist){
    return songs.filter(song => song.artist === artistName);
    const songsByJamiroquai = getSongsFromArtist(songs, 'Jamiroquai');
    console.log(songsByJamiroquai);
};

//Exercise 3:ordena el array por título alfabéticamente.
function orderAlphabetically(title){
    orderAlphabetically.sort();
    console.log(orderAlphabetically)
};

//Exercise 4:ordena el array por año en orden ascendente.
function orderByYear(year){
    orderAlphabetically.sort((a,b) => a-b,
    console.log(orderAlphabetically));
}

//Exercise 5:filtra las canciones por género determinado.
function songsByGenre(genre) {
    const songsByGenero = songsByGenre.filter(genre);
    console.log(songsByGenero)
};

//Exercise 6: -> modifica la duración de las canciones a segundos.
    function minutsToSeconds(songs) {
        return songs.map(song => {
            const [min, sec] = song.duration.split('min ');
            const durationInSeconds = parseInt(min) * 60 + parseInt(sec.replace('sec', ''));
            return { ...song, duration: durationInSeconds };
        });
    }

//Exercise 7: función getLongestSong() -> obtiene la canción con mayor duración en segundos.
function getLongestSong(){
    const getLongestSong = getLongestSong.filter(...duration)
    console.log(getLongestSong)
};

//Exercise 8:  función getShortestSong() -> obtiene la canción con menor duración en segundos. Escribe el test y la función.
function getShortestSong(){
    const getShortestSong = getShortestSong.filter(...duration)
    console.log(getShortestSong)
};



export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong };
