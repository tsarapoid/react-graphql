import "./Main.css"

const Main = () => (
  <>
    <div className="main">
      <div className="container">
        <div className="main-content">
          <div className="main-title">Работа знает всё о твоих желаниях</div>

          <div className="main-nav">
            <a href="#" className="main-link">
              Как заинтересовать работодателя
            </a>
          </div>

          <div className="main-nav">
            <a href="#" className="main-search-link">
              Приступить к поиску работы
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="search-work">
      <div className="container">
        <div className="search-work-content">
          <select className="company" name="company" id="company">
            <option value="">Компания, должность...</option>
          </select>

          <select className="category" name="category" id="category">
            <option value="">Категория работы</option>
            <option value="Auto">Автомобтльный бизнес</option>
            <option value="Hotel">
              Гостиницы, рестораны, общепит, кейкеринг
            </option>
            <option value="res">Добывающая отрасль</option>
            <option value="zkh">ЖКХ</option>
            <option value="IT">IT-сфера</option>
            <option value="art">Искусство, культура</option>
            <option value="forest">
              Лесная промышленность, деревообработка
            </option>
            <option value="Med">Медицина, фармацефтика, аптеки</option>
            <option value="iron">Металлургия, металлобработка</option>
            <option value="Oil">Нефть и газ</option>
            <option value="Education">Образовательные учереждения</option>
            <option value="Blago">
              Общественная деятельность, партии, благотворительность, НКО
            </option>
            <option value="Log">Перевозки, логистика</option>
            <option value="food">Продукты питания</option>
            <option value="Rozn">Розничная торговля</option>
            <option value="SMI">СМИ, маркетинг, реклама,дизайн</option>
            <option value="Selh">Сельское хозяйство</option>
            <option value="Building">Строительство, недвижимость</option>
            <option value="TV">Телекоммуникации, связь</option>
            <option value="Buiz">Услуги для бизнеса</option>
            <option value="Fin">Финансовый сектор</option>
            <option value="Chem">Химическое производство, удобрения</option>
            <option value="Electro">Электроника, приборостроение</option>
            <option value="Energy">Энергетика</option>
          </select>

          <select className="graph" name="graph" id="graph">
            <option value="">График:</option>
            <option value="">Гибкий график</option>
            <option value="">Полная занятность</option>
            <option value="">Вахтовый метод</option>
            <option value="">Удаленная работа</option>
          </select>

          <button className="sort" type="button">
            Сортировка
          </button>

          <button className="search" type="button">
            Поиск
          </button>
        </div>
      </div>
    </div>

    <div className="group">
      <div className="container">
        <div className="group-inner">
          <div className="cards">
            <div className="card__item">
              <div className="card__about">
                <div className="card__text">Инженер по охране труда</div>
                <div className="card__text">З.П 25 000 Р - 45 000 Р.</div>
                <div className="card__text">Компания: Яндекс</div>
              </div>

              <button className="card-button" type="button">
                Откликнуться
              </button>
            </div>

            <div className="card__item">
              <div className="card__about">
                <div className="card__text">Инженер по охране труда</div>
                <div className="card__text">З.П 25 000 Р - 45 000 Р.</div>
                <div className="card__text">Компания: Яндекс</div>
              </div>

              <button className="card-button" type="button">
                Откликнуться
              </button>
            </div>

            <div className="card__item">
              <div className="card__about">
                <div className="card__text">Инженер по охране труда</div>
                <div className="card__text">З.П 25 000 Р - 45 000 Р.</div>
                <div className="card__text">Компания: Яндекс</div>
              </div>

              <button className="card-button" type="button">
                Откликнуться
              </button>
            </div>
          </div>

          <div className="cards">
            <div className="card__item">
              <div className="card__about">
                <div className="card__text">Инженер по охране труда</div>
                <div className="card__text">З.П 25 000 Р - 45 000 Р.</div>
                <div className="card__text">Компания: Яндекс</div>
              </div>

              <button className="card-button" type="button">
                Откликнуться
              </button>
            </div>

            <div className="card__item">
              <div className="card__about">
                <div className="card__text">Инженер по охране труда</div>
                <div className="card__text">З.П 25 000 Р - 45 000 Р.</div>
                <div className="card__text">Компания: Яндекс</div>
              </div>

              <button className="card-button" type="button">
                Откликнуться
              </button>
            </div>

            <div className="card__item">
              <div className="card__about">
                <div className="card__text">Инженер по охране труда</div>
                <div className="card__text">З.П 25 000 Р - 45 000 Р.</div>
                <div className="card__text">Компания: Яндекс</div>
              </div>

              <button className="card-button" type="button">
                Откликнуться
              </button>
            </div>
          </div>

          <div className="cards">
            <div className="card__item">
              <div className="card__about">
                <div className="card__text">Инженер по охране труда</div>
                <div className="card__text">З.П 25 000 Р - 45 000 Р.</div>
                <div className="card__text">Компания: Яндекс</div>
              </div>

              <button className="card-button" type="button">
                Откликнуться
              </button>
            </div>

            <div className="card__item">
              <div className="card__about">
                <div className="card__text">Инженер по охране труда</div>
                <div className="card__text">З.П 25 000 Р - 45 000 Р.</div>
                <div className="card__text">Компания: Яндекс</div>
              </div>

              <button className="card-button" type="button">
                Откликнуться
              </button>
            </div>

            <div className="card__item">
              <div className="card__about">
                <div className="card__text">Инженер по охране труда</div>
                <div className="card__text">З.П 25 000 Р - 45 000 Р.</div>
                <div className="card__text">Компания: Яндекс</div>
              </div>

              <button className="card-button" type="button">
                Откликнуться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export { Main }
