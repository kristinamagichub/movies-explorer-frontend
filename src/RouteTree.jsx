import { Navigate, Route, createBrowserRouter } from "react-router-dom";// 

import MainPage, { Root } from "@/pages";
import Movies from '@/pages/movies';
import SavedMovies from '@/pages/saved-movies';
import ProfilePage from '@/pages/profile';
import SigninPage from '@/pages/signin';
import SignupPage from '@/pages/signup';
import NotFoundPage from '@/pages/NotFound';

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
                path: "movies",
                element: <Movies />,
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
                element: <Navigate to="/" replace={true} />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    }
]);
