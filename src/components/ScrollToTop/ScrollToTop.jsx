import "./ScrollToTop.css";
import arrow from "../../assets/images/up-arrow.svg"; //TODO:rewrite import

function toTop() {
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  });
}

export function ScrollToTop() {
  return (
    <button onClick={toTop} className="scroll" type="button">
      <img src={arrow} alt="логотип" className="scroll__image" />
    </button>
  );
}

export default ScrollToTop;
