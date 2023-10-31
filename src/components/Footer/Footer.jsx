import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer container">
            <h3 className="footer__title">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h3>

            <div className="footer__container">
                <p className="footer__author">
                    {" "}
                    © {new Date().getFullYear()}
                </p>

                <nav>
                    <ul className="footer__list">
                        <li >
                            <a
                                href="https://practicum.yandex.ru"
                                className="footer__link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li >
                            <a
                                href="https://github.com/kristinamagichub"
                                className="footer__link"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </footer>
    );
}

export default Footer;
