import './Home.css';
import Card from '../../components/Card/Card'
import { useState } from 'react';
import React from 'react';

import { useTranslation } from 'react-i18next';


function Home() {

    const { t, i18n } = useTranslation();



    const changeLanguage = (lng) => {

        i18n.changeLanguage(lng);
    };

    return (
        <>
            <section className='firstsection'>
                <div className="container">
                    <div className="firstsectionContent">
                        <div className="firstsectionTop">
                            <div className="firstsectionTopText">

                                <h2>Интернет магазин сертифицированных <br /> <span>златоустовских ножей</span>  </h2>
                                <p> <span>Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине  <br /></span>
                                    представлен наиболее широкий выбор Златоустовских ножей от Златоустовских
                                    Оружейных Фабрик и компаний, мы являемся официальными поставщиками.</p>
                                <button>Подробнее</button>
                            </div>
                            <div className="firstsectionTopImg">
                                <img src="./assets/img/knife.png" alt="" />
                            </div>
                        </div>
                        <div className="firstsectionBottom">
                            <div className='firstsectionDiv'>
                                <div className="firstsectionImg">
                                    <img src="./assets/img/firstImg.png" alt="" />
                                </div>
                                <div className="firstsectionText">
                                    <p>Гарантия 100% возврата <br />
                                        денежных средств</p>
                                </div>
                            </div>
                            <div className='firstsectionDiv'>
                                <div className="firstsectionImg">
                                    <img src="./assets/img/firstImg.png" alt="" />
                                </div>
                                <div className="firstsectionText">
                                    <p>Доставка по России, <br />
                                        Казахстану и Белоруссии</p>
                                </div>
                            </div>
                            <div className='firstsectionDiv'>
                                <div className="firstsectionImg">
                                    <img src="./assets/img/thirdImg.png" alt="" />
                                </div>
                                <div className="firstsectionText">
                                    <p>Возможность оформление <br />
                                        заказа без регистрации.</p>
                                </div>
                            </div>
                            <div className='firstsectionDiv'>
                                <div className="firstsectionImg">
                                    <img src="./assets/img/fourthImg.png" alt="" />
                                </div>
                                <div className="firstsectionText">
                                    <p>Скидки постоянным <br />
                                        покупателям. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="secondsection">
                <div className="container">
                    <div className="secondsectionContent">
                        < Card />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
