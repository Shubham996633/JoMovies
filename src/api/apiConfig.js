import apiKey from "./apiKey";

const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apikey: apiKey,
    originalImage: (imagePath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;