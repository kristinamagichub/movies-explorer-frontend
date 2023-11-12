import { Navigate, Route, createBrowserRouter } from "react-router-dom";// 

import MainPage, { Root } from "@/pages/index";
import Movies from '@/pages/movies';
import SavedMovies from '@/pages/saved-movies';
import ProfilePage from '@/pages/profile';
import SigninPage from '@/pages/signin';
import SignupPage from '@/pages/signup';
import NotFoundPage from '@/pages/NotFound';
import { MoviesApi } from "@/utils/MoviesApi";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        // path: "/",
        element: <Root />,
        //loader: MainLoader,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "movies",
                        element: < Movies
                            element={ }  //{ProtectedPage}
                            loggedIn={loggedIn}
                            SavedMovies={SavedMovies}
                            setIsError={setIsError}
                            addMovie={handleToggelMovie}
                            name='movies'
                        />,
                        loader: MoviesApi
                    },
                    {
                        path: "saved-movies",
                        element: <ProtectedRoute
                            element={SavedMovies}  //{ProtectedPage}
                            loggedIn={loggedIn}
                            SavedMovies={SavedMovies}
                            setIsError={setIsError}
                            onDelete={onDelete}
                            name='savedmovies'
                        />,
                    },
                    {
                        path: "profile",
                        element: <ProtectedRoute
                            element={ProfilePage}
                            name='profile'
                            loggedIn={loggedIn}
                            logOut={logOut}
                            setIsError={setIsError}
                            editUserData={editUserData}
                            isSuccess={isSuccess}
                            setSuccess={setSuccess}
                            setIsEdit={setIsEdit}
                            isEdit={isEdit}
                        />,
                        children: [
                            {
                                path: "edit",
                                element: <ProfilePage />
                            }
                        ]
                    },
                ]
            },
            {
                path: "signin",
                element: <SigninPage />,
            },
            {
                path: "login",
                element: <Navigate to="/profile" replace={true} />,
            },
            {
                path: "signup",
                element: <SignupPage />,
            },
            {
                path: "signout",
                element: <Logout />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    }
]);
