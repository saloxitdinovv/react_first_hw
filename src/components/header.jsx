
import academyLogo from './assets/academy_logo.svg'

function Header_block() {

    return (
        <>
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
                            Войти
                        </a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header_block
