import "./Footer.css"

import logo from "../../img/Logo2.svg"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        <div className="footer__left">
          <div className="footer__logo">
            <img
              className="footer__logo--svg"
              src={logo}
              alt="logo"
              width="78"
              height="69"
            />
          </div>

          <div className="footer__slog">
            <div className="footer__slogan">
              <span>Смотри вакансии, ищи работников</span>
            </div>
          </div>
        </div>

        <div className="footer__info">
          <div className="footer__info1">
            <a className="footer__item" href="#!">
              О нас
            </a>
            <a className="footer__item" href="#!">
              Контакты
            </a>
            <a className="footer__item" href="#!">
              Поддержка
            </a>
            <a className="footer__item" href="#!">
              Чето тут еще
            </a>
          </div>

          <div className="footer__info2">
            <a className="footer__item" href="#!">
              О проекте
            </a>
            <a className="footer__item" href="#!">
              Реклама на сайте
            </a>
            <a className="footer__item" href="polit.html">
              Политика конфиденциальности
            </a>
            <a className="footer__item" href="#!">
              Все права защищены © 2022
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export { Footer }
