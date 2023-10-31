import { useReducer } from "react";
import { RouterProvider } from "react-router-dom";

import {
  SavedMoviesContext,
  SavedMoviesDispatchContext,
} from "./savedMoviesContext";
import { router } from "./RouteTree";

import "./App.css";

import { DeleteIcon } from "./components/Icons";

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

const initSavedMovies = [{
  id: 1,
  title: "Бег это свобода",
  time: "1:31",
  cardImgUrl: "/images/33-movie-pic.jpg",
  Icon: DeleteIcon,
},
{
  id: 2,
  title: "В погоне за Бенкси",
  time: "1:08",
  cardImgUrl: "/images/33-movie-pic.jpg",
  Icon: DeleteIcon,
},
{
  id: 3,
  title: "Война искусств",
  time: "1:55",
  cardImgUrl: "/images/33-movie-pic.jpg",
  Icon: DeleteIcon,
},
]

function App() {
  const [savedMovies, dispatch] = useReducer(savedMoviesReducer, initSavedMovies);

  return (
    <SavedMoviesContext.Provider value={savedMovies}>
      <SavedMoviesDispatchContext.Provider value={dispatch}>
        <RouterProvider router={router} />
      </SavedMoviesDispatchContext.Provider>
    </SavedMoviesContext.Provider>
  );
}

export default App;
