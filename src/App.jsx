import { useCallback, useEffect, useReducer, useState } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./RouteTree";

import {
  SavedMoviesContext,
  SavedMoviesDispatchContext,
} from "./savedMoviesContext";

import {
  CurrentUserContext,
  CurrentUserDispatchContext,
} from "./currentUserContext";


import "./App.css";
import MainApi from "./utils/MainApi";

//import { DeleteIcon } from "./components/Icons";

function savedMoviesReducer(movies, action) {
  switch (action.type) {
    case "added": {
      return [
        ...movies,
        {
          id: action.id,
          title: action.title,
          time: action.time,
          cardImgUrl: action.cardImgUrl,
          Icon: action.Icon,
        },
      ];
    }
    case "deleted": {
      return movies.filter((m) => m.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
function currentUserReducer(user, action) {
  switch (action.type) {
    case "loggedIn": {
      return {
        name: action.name,
        email: action.email,
        _id: action._id,
        isLoggedIn: true,
      };
    }
    case "loggedOut": {
      return {
        isLoggedIn: false,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

// const [loggedIn, setLoggedIn] = useState(false)

// useEffect(() => {
// if (localStorage.jwt) {
//   Promise.all([MainApi.getUserData(localStorage.jwt), MainApi.getMovies(localStorage.jwt)])
//     .then(([userData, dataMovies]) => {
//       setSavedMovies(dataMovies.reserse())

//     }).catch((err) => {
//       console.error(`Ошибка при загрузке начальных данных ${err}`)
//       setIsCheckToken(false)
//       localStorage.clear()
//     })
// } else {
//   setLoggedIn(false)
//   setIsCheckToken(false)
//   localStorage.clear()
// }
// }, [LoggedIn])

// const setSuccess = useCallback(() => {
//   setIsSuccess(false)
// }, []);

const getUserData = async (token) => {
  try {
    const baseUrl = 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const user = await response.json();
    return user;
  } catch (error) { }
}

function App() {
  const [savedMovies, dispatch] = useReducer(savedMoviesReducer, []);
  const [currentUser, dispatchUser] = useReducer(currentUserReducer, {});

  useEffect(() => {
    if (localStorage.jwt) {
      getUserData(localStorage.jwt).then((res) => {
        dispatchUser({ type: "loggedIn", _id: res._id, name: res.name, email: res.email });
      })
    } else {
      dispatchUser({ type: "loggedOut" });
    }
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentUserDispatchContext.Provider value={dispatchUser}>

        <SavedMoviesContext.Provider value={savedMovies}>
          <SavedMoviesDispatchContext.Provider value={dispatch}>

            <RouterProvider router={router} />

          </SavedMoviesDispatchContext.Provider>
        </SavedMoviesContext.Provider>

      </CurrentUserDispatchContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
