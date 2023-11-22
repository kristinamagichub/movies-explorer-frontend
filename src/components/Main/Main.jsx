import { createContext } from "react";

import Promo from "@/components/Promo/Promo";
import AboutProject from "@/components/AboutProject/AboutProject";
import Techs from "@/components/Techs/Techs";
import AboutMe from "@/components/AboutMe/AboutMe";
import Portfolio from "@/components/Portfolio/Portfolio";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export const UserContext = createContext(null);

function Main() {
  return (
    <main>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <ScrollToTop />
    </main>
  );
}

export default Main;
