import './Card.css';
import React from 'react';
import { useState } from 'react';


function Cards() {
    const [cards] = useState([
        {
            title: 'Каталог ножей',
            text: {
                textOne: "Разделочные",
                textTwo: "Туристические",
                textThree: "Охотничьи",
            },
            img: './assets/img/knifeOne.png'
        },
        {
            title: 'Среднеклинковое оружие',
            text: {
                textOne: "Разделочные",
                textTwo: "Туристические",
                textThree: "Охотничьи",
            },
            img: './assets/img/knifeTwo.png'
        },
        {
            title: 'Длинноклинковое оружие',
            text: {
                textOne: "Разделочные",
                textTwo: "Туристические",
                textThree: "Охотничьи",
            },
            img: './assets/img/knifeThree.png'
        },
        {
            title: 'Сувенирные изделия',
            text: {
                textOne: "Разделочные",
                textTwo: "Туристические",
                textThree: "Охотничьи",
            },
            img: './assets/img/knifeFour.png'
        },
        {
            title: 'Сопутствующие товары',
            text: {
                textOne: "Разделочные",
                textTwo: "Туристические",
                textThree: "Охотничьи",
            },
            img: './assets/img/knifeFife.png'
        },
        {
            title: 'Ножевая мастерская',
            text: {
                textOne: "Разделочные",
                textTwo: "Туристические",
                textThree: "Охотничьи",
            },
            img: './assets/img/knifeSix.png'
        },
    ])
    return (
        <>
            {cards.map((card, i) => (
                <div className='card' key={i}>
                    <div className="cardContent">
                    <div className='cardText'>
                        <div className='cardTitleContent'>
                            <h3 className='cardTitle'>{card.title}</h3>
                            <div className="line"></div>
                        </div>
                        <div className='cardInformation'>
                            <ul className='cardItemsContent'>
                                <li className='cardItems'>{card.text.textOne}</li>
                                <li className='cardItems'>{card.text.textTwo}</li>
                                <li className='cardItems'>{card.text.textThree}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='cardImageDiv'>
                        <img className='cardImage' src={card.img} alt="" />
                    </div>
                    </div>
                </div>
            ))}
        </>

    );
}

export default Cards;
