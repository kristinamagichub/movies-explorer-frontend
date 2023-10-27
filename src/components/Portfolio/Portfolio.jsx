import "./Portfolio.css";
import arrow from "@/assets/images/arrow.svg";

export function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <nav className="portfolio__list">
                <a
                    href="https://github.com/kristinamagichub/how-to-learn"
                    className="portfolio__link portfolio__link-border"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="portfolio__description">Статичный сайт</p>
                    <img
                        className="portfolio__image"
                        src={arrow}
                        alt="стрелка для ссылки"
                    />
                </a>
                <a
                    href="https://github.com/kristinamagichub/russian-travel"
                    className="portfolio__link portfolio__link-border"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="portfolio__description">Адаптивный сайт</p>
                    <img
                        className="portfolio__image"
                        src={arrow}
                        alt="стрелка для ссылки"
                    />
                </a>
                <a
                    href="https://github.com/kristinamagichub/react-mesto-api-full-gha"
                    className="portfolio__link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="portfolio__description">Одностраничное приложение</p>
                    <img
                        className="portfolio__image"
                        src={arrow}
                        alt="стрелка для ссылки"
                    />
                </a>
            </nav>
        </section>
    );
}

export default Portfolio;
