import { useReducer, useState } from "react";
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
        _id: action._id
      };
    }
    case "loggedOut": {
      return {};
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}



function App() {
  const [savedMovies, dispatch] = useReducer(savedMoviesReducer, []);
  const [currentUser, dispatchUser] = useReducer(currentUserReducer, {});

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
