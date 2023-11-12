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
                        element: < Movies />,
                        loader: MoviesApi
                    },
                    {
                        path: "saved-movies",
                        element: <SavedMovies />,
                    },
                    {
                        path: "profile",
                        element: <ProfilePage />,
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
