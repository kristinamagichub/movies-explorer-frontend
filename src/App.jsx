import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import MainPage from "./pages/index";
import Footer from "./components/Footer/Footer";
import Movies from "./pages/movies/index";
import SavedMovies from "./pages/saved-movies/index";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NotFoundPage from "./pages/NotFound";
import * as api from "./utils/apiMain";
import CurrentUserContext from "./components/CurrentUserContext/CurrentUserContext";
import InfoToolTip from "./components/InfoToolTip/InfoToolTip";
import InfoToolTipEdit from "./components/InfoToolTipEdit/InfoToolTipEdit";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoToolTipPopupOpen, setInfoToolTipPopupOpen] = useState(false);
  const [isInfoToolTipUpdatePopupOpen, setInfoToolTipUpdatePopupOpen] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setisEdit] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .getUserContent(jwt)
        .then((res) => {
          if (res) {
            localStorage.removeItem("allMovies");
            setIsLoggedIn(true);
          }
          navigate(path);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getUserInfo()
        .then((profileInfo) => {
          setCurrentUser(profileInfo);
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .getMovies()
        .then((cardsData) => {
          setSavedMovies(cardsData.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  function getRegisterUserApi({ name, email, password }) {
    api
      .register(name, email, password)
      .then(() => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(true);
        getLoginUserApi({ email, password });
      })
      .catch((err) => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      });
  }

  function getLoginUserApi({ email, password }) {
    setIsLoading(true);
    api
      .authorize(email, password)
      .then((res) => {
        if (res) {
          setInfoToolTipPopupOpen(true);
          setIsSuccess(true);
          localStorage.setItem("jwt", res.token);
          navigate("/movies", { replace: true });
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setInfoToolTipPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function getEditUserApi(newUserInfo) {
    setIsLoading(true);
    api
      .getEditUserInfo(newUserInfo)
      .then((data) => {
        setInfoToolTipUpdatePopupOpen(true);
        setisEdit(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        setInfoToolTipUpdatePopupOpen(true);
        setisEdit(false);
        console.log(err);
        getUnauthorizErrorApi(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function getLikeMovieApi(card) {
    api
      .createMovie(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        getUnauthorizErrorApi(err);
      });
  }

  function getDelMovieApi(card) {
    api
      .deleteMovie(card._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== card._id),
        ); // Удаляем карточку из списка избранных карточек
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        getUnauthorizErrorApi(err);
      });
  }

  function getUnauthorizErrorApi(err) {
    if (err === "Error: 401") {
      getSignOutApi();
    }
  }

  const getSignOutApi = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    localStorage.clear();
    navigate("/");
  };

  const isOpen = isInfoToolTipPopupOpen || isInfoToolTipUpdatePopupOpen;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  function closeAllPopups() {
    setInfoToolTipPopupOpen(false);
    setInfoToolTipUpdatePopupOpen(false);
  }

  function closeByOverlay(event) {
    if (event.target === event.currentTarget) {
      closeAllPopups();
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <Header loggedIn={isLoggedIn} />
                  <MainPage />
                  <Footer />
                </>
              }
            />
            <Route
              path={"/signin"}
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Login
                    isLoading={isLoading}
                    onAuthorization={getLoginUserApi}
                  />
                )
              }
            />
            <Route
              path={"/signup"}
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Register
                    onRegister={getRegisterUserApi}
                    isLoading={isLoading}
                  />
                )
              }
            />
            <Route path={"*"} element={<NotFoundPage />} />
            <Route
              path={"/movies"}
              element={
                <ProtectedRoute
                  path="/movies"
                  loggedIn={isLoggedIn}
                  component={Movies}
                  handleLikeFilm={getLikeMovieApi}
                  onDeleteCard={getDelMovieApi}
                  savedMovies={savedMovies}
                />
              }
            />
            <Route
              path={"/saved-movies"}
              element={
                <ProtectedRoute
                  path="/saved-movies"
                  savedMovies={savedMovies}
                  loggedIn={isLoggedIn}
                  onDeleteCard={getDelMovieApi}
                  component={SavedMovies}
                />
              }
            />
            <Route
              path={"/profile"}
              element={
                <ProtectedRoute
                  path="/profile"
                  component={Profile}
                  isLoading={isLoading}
                  signOut={getSignOutApi}
                  onUpdateUser={getEditUserApi}
                  loggedIn={isLoggedIn}
                />
              }
            />
          </Routes>
          <InfoToolTip
            isOpen={isInfoToolTipPopupOpen}
            isSuccess={isSuccess}
            onCloseOverlay={closeByOverlay}
            onClose={closeAllPopups}
          />
          <InfoToolTipEdit
            isOpen={isInfoToolTipUpdatePopupOpen}
            isEdit={isEdit}
            onCloseOverlay={closeByOverlay}
            onClose={closeAllPopups}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
