import React, { useState } from 'react';
import './Telephone.css';

function Telephone() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="contaainer">
            <button className="hamburger-icon" onClick={toggleMenu}>
                <div className={` ${isMenuOpen ? 'open' : ''}`}>
                    <img src="./assets/img/phone.png" alt="" />
                </div>
                <div className={` ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={` ${isMenuOpen ? 'open' : ''}`}></div>
            </button>
            <nav className={`phone ${isMenuOpen ? 'open' : ''}`}>
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
            </nav>
        </div>
    );
}

export default Telephone;




