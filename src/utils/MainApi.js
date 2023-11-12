// const { NODE_ENV } = process.env;

class MainApiConstruct {
    constructor(options) {
        this._url = options.baseUrl;
    }

    //универсальный метод для каждой отправки на сервер, проверяющий запрос
    _checkResponse(res) { return res.ok ? res.json() : Promise.reject(res.status) }

    _request(url, options) {
        return fetch(`${this._url}${url}`, options)
            .then(this._checkResponse)
    }

    registration(username, email, password) {
        return this._request(`/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                email,
                password,
            })
        })
    }

    authorization(email, password) {
        return this._request(`/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
    }

    getUserData(token) {
        return this._request(`/users/me`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }

    setUserInfo(username, email, token) {
        return this._request(`/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: username,
                email: email,
            })
        })
    }


    getMovies(token) {
        return this._request(`/movies`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }

    addMovie(data, token) {
        return this._request(`/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                // id: item.id,
                // title: item.nameRU,
                // time: toHoursAndMinutes(item.duration),
                cardImgUrl: `https://api.nomoreparties.co/${item.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${item.image.formats.thumbnail.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
                // Icon: LikeIcon,
                // iconProps: {
                //     isPrimary: false,
                // },
            })
        })
    }

    deleteMovie(cardId, token) {
        return this._request(`/movies/${cardId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }

}

// экземпляр класса ApiMain
const MainApi = new MainApiConstruct({
    baseUrl: 'http://localhost:3000',
    // baseUrl: NODE_ENV === 'production' ? '//api.movies.nomoredomainsrocks.ru' : '//localhost:3000',
});

export default MainApi;

