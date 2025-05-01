import React, { useState } from 'react';
import './Basket.css';

function Basket() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="contaainer">
            <button className="hamburger-icon" onClick={toggleMenu}>
                <div className={` ${isMenuOpen ? 'open' : ''}`}>
                    <img src="./assets/img/headerBasket.png" alt="" />
                </div>
                <div className={` ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={` ${isMenuOpen ? 'open' : ''}`}></div>
            </button>
            <nav className={`baskets ${isMenuOpen ? 'open' : ''}`}>
                <div className='phoneNumber'>
                    <div className='basketText'>
                        <a href="">
                            <p>0 р.</p>
                            <h4>Оформить заказ</h4>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Basket;






