import { createContext, useEffect, useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';

import Header from '@/components/Header';
import Promo from '@/components/Promo';
import AboutProject from '@/components/AboutProject';
import Techs from '@/components/Techs';
import AboutMe from '@/components/AboutMe';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const UserContext = createContext(null);

// export const DevNavTools = () => (
//     <nav className="dev-navigation-tools">
//         <Link to='/'>main</Link>
//         <Link to='/signup'>signup</Link>
//         <Link to='/signin'>signin</Link>
//         <Link to='*'>NotFoundPage</Link>
//         <Link to='/profile'>ProfilePage</Link>
//         <Link to='/movies'>Movies</Link>
//         <Link to='/saved-movies'>SavedMovies</Link>
//     </nav>
// )

export function Root() {
    const { pathname } = useLocation();
    const isTrueSet = (sessionStorage["is-authenticated"] === 'true');
    const [isLoggedIn, setIsLoggedIn] = useState(isTrueSet);
    const isPrimiaryHeader = pathname === "/";
    const isHeaderShown = pathname !== "/signin" && pathname !== "/signup";
    const isFooterShown = isHeaderShown && pathname !== "/profile";

    function authorize() {
        if (sessionStorage["is-authenticated"] === "true") {

            setIsLoggedIn(true);

        } else {
            setIsLoggedIn(false);
            // setIsCheckToken(false);
        }
    }

    useEffect(() => {
        // authorize();
    }, [isLoggedIn])

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {isHeaderShown && (<Header isPrimary={isPrimiaryHeader} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)}
            {/*! //! Delete later */}
            {/* <DevNavTools /> */}
            <Outlet />
            {isFooterShown && (<Footer />)}
        </UserContext.Provider>
    )
}

function MainPage() {
    return (

        <main >
            <Promo className='container' />
            <AboutProject className='container' />
            <Techs className='container' />
            <AboutMe className='container' />
            <Portfolio className='container' />
            <ScrollToTop className='container' />
        </main>

    )
}

export default MainPage;
