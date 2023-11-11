export async function MoviesApi() {
    const baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';
    return await fetch(baseUrl)
}



// // const { NODE_ENV } = process.env;

// //класс для работы с сервером 
// class MoviesApi {
//     constructor(options) {
//         this._url = options.baseUrl;
//     }

//     //универсальный метод для каждой отправки на сервер, проверяющий запрос
//     _checkResponse(res) { return res.ok ? res.json() : Promise.reject }

//     _request(url, options) {
//         return fetch(`${this._url} ${url}`, options)
//             .then(this._checkResponse)
//     }

//     getMovies() {
//         return this._request('/')
//     }
// }

// // экземпляр класса ApiMovies
// const Movies = new ApiMovies({
//     baseUrl: 'https://api.movies.nomoredomainsrocks.ru',
//     // baseUrl: NODE_ENV === 'production' ? '//api.movies.nomoredomainsrocks.ru' : '//localhost:3000',
// });

// export default apiMovies;

