const URL='https://fpaniaguajavascript.github.io/movies-250.json';

function processMovie(data) {
    const peliculas= data.movies
}
//Recorremos con el metodo for each
peliculas.forEach(pelicula => {
    console.log(pelicula.title)
});
//Recorremos con el bucle for-of

for(pelicula of peliculas){
    console.log("Director:" +  pelicula.director)
}


doGetRequest(URL, processMovie);