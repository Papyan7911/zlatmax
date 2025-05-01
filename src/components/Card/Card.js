import './Card.css';
import React from 'react';
import { Card, Space } from 'antd';


function Cards() {
    return (
        <section className='cardSection'>
            <div className="container">
                <div className="CardContent">
                    <div className='Card'>
                        <Space direction="vertical" size={16}>
                            <Card className='cards' title="Каталог ножей" style={{ width: 511 }}>
                                <div className='cardInformation'>
                                    <div className='cardText'>
                                        <ul className='cardItem'>
                                            <li className='cardItemContent'>Разделочные </li>
                                            <li className='cardItemContent'>Туристические</li>
                                            <li className='cardItemContent'>Охотничьи</li>
                                        </ul>
                                    </div>
                                    <div className='cardImage'>
                                        <img src="./assets/img/knifeOne.png" alt="" />
                                    </div>
                                </div>
                            </Card>
                        </Space>
                    </div>
                    <div className='Card'>
                        <Space direction="vertical" size={16}>
                            <Card className='cards' title="Среднеклинковое оружие" style={{ width: 511 }}>
                                <div className='cardInformation'>
                                    <div className='cardText'>
                                        <ul className='cardItem'>
                                            <li className='cardItemContent'>Разделочные </li>
                                            <li className='cardItemContent'>Туристические</li>
                                            <li className='cardItemContent'>Охотничьи</li>
                                        </ul>
                                    </div>
                                    <div className='cardImage'>
                                        <img src="./assets/img/knifeTwo.png" alt="" />
                                    </div>
                                </div>
                            </Card>
                        </Space>
                    </div>
                    <div className='Card'>
                        <Space direction="vertical" size={16}>
                            <Card className='cards' title="Длинноклинковое оружие" style={{ width: 511 }}>
                                <div className='cardInformation'>

                                    <div className='cardText'>
                                        <ul className='cardItem'>
                                            <li className='cardItemContent'>Разделочные </li>
                                            <li className='cardItemContent'>Туристические</li>
                                            <li className='cardItemContent'>Охотничьи</li>
                                        </ul>
                                    </div>
                                    <div className='cardImage'>
                                        <img src="./assets/img/knifeThree.png" alt="" />
                                    </div>
                                </div>
                            </Card>
                        </Space>
                    </div>
                    <div className='Card'>
                        <Space direction="vertical" size={16}>
                            <Card className='cards' title="Сувенирные изделия" style={{ width: 511 }}>
                                <div className='cardInformation'>

                                    <div className='cardText'>
                                        <ul className='cardItem'>
                                            <li className='cardItemContent'>Разделочные </li>
                                            <li className='cardItemContent'>Туристические</li>
                                            <li className='cardItemContent'>Охотничьи</li>
                                        </ul>
                                    </div>
                                    <div className='cardImage'>
                                        <img src="./assets/img/knifeFour.png" alt="" />
                                    </div>
                                </div>
                            </Card>
                        </Space>
                    </div>
                    <div className='Card'>
                        <Space direction="vertical" size={16}>
                            <Card className='cards' title="Сопутствующие товары" style={{ width: 511 }}>
                                <div className='cardInformation'>

                                    <div className='cardText'>
                                        <ul className='cardItem'>
                                            <li className='cardItemContent'>Разделочные </li>
                                            <li className='cardItemContent'>Туристические</li>
                                            <li className='cardItemContent'>Охотничьи</li>
                                        </ul>
                                    </div>
                                    <div className='cardImage'>
                                        <img src="./assets/img/knifeFife.png" alt="" />
                                    </div>
                                </div>
                            </Card>
                        </Space>
                    </div>
                    <div className='Card'>
                        <Space direction="vertical" size={16}>
                            <Card className='cards' title="Ножевая мастерская" style={{ width: 511 }}>
                                <div className='cardInformation'>
                                    <div className='cardText'>
                                        <ul className='cardItem'>
                                            <li className='cardItemContent'>Разделочные </li>
                                            <li className='cardItemContent'>Туристические</li>
                                            <li className='cardItemContent'>Охотничьи</li>
                                        </ul>
                                    </div>
                                    <div className='cardImage'>
                                        <img src="./assets/img/knifeSix.png" alt="" />
                                    </div>
                                </div>
                            </Card>
                        </Space>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default Cards;
