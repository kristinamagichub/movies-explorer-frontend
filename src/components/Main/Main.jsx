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
      <Promo className="container" />
      <AboutProject className="container" />
      <Techs className="container" />
      <AboutMe className="container" />
      <Portfolio className="container" />
      <ScrollToTop className="container" />
    </main>
  );
}

export default Main;
