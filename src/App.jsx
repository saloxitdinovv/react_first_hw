import { useState } from 'react'
import academyLogo from './assets/academy_logo.svg'
import menu from './assets/menu.svg'
import location from './assets/location.svg'
import select from './assets/select.svg'
import user from './assets/user.svg'
import children from './assets/children.svg'
import teens from './assets/teens.svg'
import old from './assets/old.svg'
import phone from './assets/phone.svg'

import './App.css'

function App() {

  return (
    <>
      <Header_block />
      <div className='container'>
        <h1 className='all_programs_h1'>Все программы обучения</h1>
        <div className="programs">
          <div className="age_type">
            <img src={children} alt="" />
            <span>
              <h4>Дети</h4>
              <p>8 — 14 лет</p>
            </span>
          </div>
          <div className="age_type">
            <img src={teens} alt="" />
            <span>
              <h4>Подростки</h4>
              <p>14 — 18 лет</p>
            </span>
          </div>
          <div className="age_type">
            <img src={old} alt="" />
            <span>
              <h4>Взрослые</h4>
              <p>18 — ∞ </p>
            </span>
          </div>
        </div>
        <hr />

        <div className="main_block">
          <aside>
            <h3>Уровень сложности</h3>


            <button className="switcher">
              <input type="radio" />
              Новичок
            </button>

            <button className="switcher">
              <input type="radio" />
              Пользователь
            </button>

            <button className="switcher">
              <input type="radio" />
              Профессионал
            </button>

            <button className="switcher">
              <input type="radio" />
              Читер
            </button>

            <hr />

            <h3>Тип обучения</h3>

            <button className="switcher">
              <input type="radio" />
              Любой
            </button>

            <button className="switcher">
              <input type="radio" />
              Профессия
            </button>

            <button className="switcher">
              <input type="radio" />
              Курс
            </button>

          </aside>

          <div className="main">
            <h3>Направление</h3>

            <div className="directions">
              <div className="direction">Робототехника</div>
              <div className="direction">Создание игр</div>
              <div className="direction">Web-разработка</div>
              <div className="direction">Мультимедиа</div>
              <div className="direction">Шахматы</div>
              <div className="direction">3D-моделирование и дизайн</div>
              <div className="direction">Английский язык</div>
              <div className="direction">Блогинг</div>
              <div className="direction">Soft skills</div>
            </div>

            <div className="courses">
              <div className="course">
                <p className='course_box_head'>Программа</p>
                <div className="course_name">
                  <img src={phone} alt="phone" />
                  <h3>«Разработка мобильных приложений»</h3>
                </div>
                <p className="about">
                  Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                  на смартфонах, умных часах и планшетах.
                </p>
                <p className="duration">24 месяца</p>
                <div className="discount">-10%</div>
              </div>
              <div className="course">
                <p className='course_box_head'>Программа</p>
                <div className="course_name">
                  <img src={phone} alt="phone" />
                  <h3>«Разработка мобильных приложений»</h3>
                </div>
                <p className="about">
                  Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                  на смартфонах, умных часах и планшетах.
                </p>
                <p className="duration">24 месяца</p>
                <div className="discount">-10%</div>
              </div>
              <div className="course">
                <p className='course_box_head'>Программа</p>
                <div className="course_name">
                  <img src={phone} alt="phone" />
                  <h3>«Разработка мобильных приложений»</h3>
                </div>
                <p className="about">
                  Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                  на смартфонах, умных часах и планшетах.
                </p>
                <p className="duration">24 месяца</p>
                <div className="discount">-10%</div>
              </div>
              <div className="course">
                <p className='course_box_head'>Программа</p>
                <div className="course_name">
                  <img src={phone} alt="phone" />
                  <h3>«Разработка мобильных приложений»</h3>
                </div>
                <p className="about">
                  Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                  на смартфонах, умных часах и планшетах.
                </p>
                <p className="duration">24 месяца</p>
                <div className="discount">-10%</div>
              </div>
              <div className="course">
                <p className='course_box_head'>Программа</p>
                <div className="course_name">
                  <img src={phone} alt="phone" />
                  <h3>«Разработка мобильных приложений»</h3>
                </div>
                <p className="about">
                  Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                  на смартфонах, умных часах и планшетах.
                </p>
                <p className="duration">24 месяца</p>
                <div className="discount">-10%</div>
              </div>
              <div className="course">
                <p className='course_box_head'>Программа</p>
                <div className="course_name">
                  <img src={phone} alt="phone" />
                  <h3>«Разработка мобильных приложений»</h3>
                </div>
                <p className="about">
                  Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                  на смартфонах, умных часах и планшетах.
                </p>
                <p className="duration">24 месяца</p>
                <div className="discount">-10%</div>
              </div>
              <div className="course">
                <p className='course_box_head'>Программа</p>
                <div className="course_name">
                  <img src={phone} alt="phone" />
                  <h3>«Разработка мобильных приложений»</h3>
                </div>
                <p className="about">
                  Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                  на смартфонах, умных часах и планшетах.
                </p>
                <p className="duration">24 месяца</p>
                <div className="discount">-10%</div>
              </div>
              <div className="course">
                <p className='course_box_head'>Программа</p>
                <div className="course_name">
                  <img src={phone} alt="phone" />
                  <h3>«Разработка мобильных приложений»</h3>
                </div>
                <p className="about">
                  Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                  на смартфонах, умных часах и планшетах.
                </p>
                <p className="duration">24 месяца</p>
                <div className="discount">-10%</div>
              </div>
              <div className="course">
                <p className='course_box_head'>Программа</p>
                <div className="course_name">
                  <img src={phone} alt="phone" />
                  <h3>«Разработка мобильных приложений»</h3>
                </div>
                <p className="about">
                  Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                  на смартфонах, умных часах и планшетах.
                </p>
                <p className="duration">24 месяца</p>
                <div className="discount">-10%</div>
              </div>
              <div className="course">
                <p className='course_box_head'>Программа</p>
                <div className="course_name">
                  <img src={phone} alt="phone" />
                  <h3>«Разработка мобильных приложений»</h3>
                </div>
                <p className="about">
                  Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются
                  на смартфонах, умных часах и планшетах.
                </p>
                <p className="duration">24 месяца</p>
                <div className="discount">-10%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

















function Header_block() {

  return (
    <header>
      <div className="container">
        <nav className="header">
          <a href="#" className="head_block">
            <img src={academyLogo} alt="logo" />
          </a>


          <a href="#" className="head_block">
            <img src={menu} alt="menu" />
            Все курсы
          </a>


          <a href="#" className="head_block">Мероприятия</a>


          <a href="#" className="head_block">Базы знаний</a>


          <a href="#" className="head_block">Карьера</a>


          <a href="#" className="head_block">
            <img src={location} alt="location_icon" />
            Нижний Новгород
            <img src={select} alt="open" />
          </a>


          <a href="#" className="head_block">8 800 950-33-98 </a>


          <a href="#" className="head_block">
            <img src={user} alt="" />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default App
