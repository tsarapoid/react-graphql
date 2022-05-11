import "./Header.css"

import logo from "../../img/Logo2.svg"

const Header = () => (
  <div className="page">
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="location">
            <div id="tow">Ваш город: определяется</div>
          </div>

          <div className="logo">
            {/* <a href="/index.php"> */}
            <img
              className="logo"
              src={logo}
              alt="logo"
              width="60"
              height="50"
            />
            {/* </a> */}
          </div>

          <div className="nav">
            <a href="#" className="nav-link">
              Создать резюме
            </a>

            <a href="../auth/index.php" className="nav-link">
              Авторизация
            </a>

            <a href="#!">
              <img className="nav-svg" src="../../img/user-svg.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
)

export { Header }
