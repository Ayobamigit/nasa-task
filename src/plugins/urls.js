const baseUrl = () => {
    return {
        nasa: process.env.REACT_APP_NASA_BASE_URL,
        imdb: process.env.REACT_APP_IMDB_BASE_URL,
    };
}

//Movie APIs
export const allMovies = `${baseUrl().imdb}/search/movie`;
export const individualMovie = `${baseUrl().imdb}/movie`;

//Nasa Info APIs
export const dailyPicture = `${baseUrl().nasa}`;
