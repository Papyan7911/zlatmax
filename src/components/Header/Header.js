import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Person from '../Person/Person';
import Telephone from '../Telephone/Telephone';
import Save from '../Save/Save';
import './Header.css';
import Basket from '../Basket/Basket';
import { Link } from 'react-router-dom';

function Header() {
  const menuItems = [
    { name: "О нас", href: "/aboutUs" },
    { name: "Оплата и доставка", href: "/delivery" },
    { name: "Новости", href: "/news" },
    { name: "Контакты", href: "/contact" }
  ]
  const items = [
    { name: "Каталог ножей" },
    { name: "Клинковое оружие" },
    { name: "Сувенирные изделия" },
    { name: "Фонари ARMYTEK" },
    { name: "Сопуствующие товары" }
  ];
  return (
    <header>
      <div className="headerContent">
        <div className="mediaHeader">
          <div className="container">
            <div className="mediaHeaderContent">
              <div>
                < Telephone />
              </div>
              <div>
                < Person />
              </div>
              <div>
                < Save />
              </div>
              <div>
                < Basket />
              </div>
              <div>

                < HamburgerMenu />
              </div>
            </div>
          </div>
        </div>
        <div className="topHeader">
          <div className="container">
            <div className="topHeaderContent">
              <div className="navbar">
                <nav>
                  <ul className='navbarIcons'>
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link to={item.href} className='navbarIcon'>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <Link to="/private" className='privateLink'>
                <div className="private">

                  <img src="./assets/img/person.icon.png" alt="" />
                  <p className='privateText'>Личный кабинет</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mediumHeader">
          <div className="container">
            <div className="mediumHeaderContent">
              <div className="mediumHeaderLeft">
                <div className="mediumHeaderLogo">
                  <a href="/">
                    <img src="./assets/img/logo.png" alt="Logo" />
                  </a>
                </div>
                <div className="mediumHeaderInput">
                  <input className='searchInput' type="text" placeholder='Поиск' />
                  <div className='searchDiv'>
                    <img className='searchImg' src="./assets/img/search.png" alt="searchImage" />
                  </div>
                </div>
              </div>
              <div className="mediumHeaderRight">
                <div className='information'>
                  <div className='place'>
                    <img className='placeImg' src="./assets/img/place.png" alt="placeImg" />
                    <p className='placeText'>Москва</p>
                  </div>
                  <div className='phoneNumber'>
                    <div className='number'>
                      <p>8-800-777-49-67</p>
                      <select name="" id="">
                        <option value="">8-780-774-51-44</option>
                        <option value="">8-740-624-21-75</option>
                      </select>
                    </div>
                    <h4>Заказать звонок</h4>
                  </div>
                </div>
                <div className='order'>
                  <div className='like'>
                    <img src="./assets/img/like.png" alt="like.png" />
                  </div>
                  <div className='basket'>
                    <div className='basketImg'>
                      <img src="./assets/img/basket.png" alt="basket.png" />
                      <p>0</p>
                    </div>
                    <div className='basketText'>
                      <p>0 р.</p>
                      <h4>Оформить заказ</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomHeader">
          <div className="container">
            <div className="bottomHeaderContent">
              <nav>
                <ul className='items'>
                  {items.map((item, index) => (
                    <li className='itemsContent' key={index}>
                      <Link className='itemContent' to={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
