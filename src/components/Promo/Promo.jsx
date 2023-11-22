import NavTab from "@/components/NavTab/NavTab";
import landingLogo from "@/assets/images/landing-logo.svg";

import "./Promo.css";

export function Promo() {
  return (
    <section className="promo">
      <div className="promo__container container">
        <div className="promo__text-block">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__description">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img className="promo__image" src={landingLogo} alt="Картинка" />

        <NavTab />
      </div>
    </section>
  );
}

export default Promo;
