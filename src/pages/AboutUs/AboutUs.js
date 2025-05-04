import "./AboutUs.css"

function AboutUs() {
    return (
        <section className="aboutSection">
            <div className="aboutSectionContent">
                <div className="firstText">
                    <h2 className="textTitle">Златоустовские ножи — легенды из стали</h2>
                    <p className="textContent">Привет! Мы — официальный магазин легендарных Златоустовских ножей, где можно купить нож для любых задач: от охоты до кухни. Наши клинки — это не просто инструменты, а наследие уральских мастеров, проверенное временем.</p>
                </div>
                <div className="secondText">
                    <h2 className="textTitle">Что у нас можно купить?</h2>
                    <ul>
                        <li><a className="textContent" href="">Складные ножи – компактные, стильные и невероятно удобные. Хочешь купить складной нож, который не подведёт? У нас есть идеальные варианты!</a></li>
                        <li><a className="textContent" href="">Кухонные ножи – для тех, кто ценит остроту и баланс. Кухонные ножи купить у нас — значит получить профессиональный инструмент для дома.</a></li>
                        <li><a className="textContent" href="">Охотничьи и тактические – надёжные, прочные, с правильной заточкой.</a></li>
                        <li><a className="textContent" href="">Коллекционные и эксклюзивные – ручная гравировка, дамаск, булат.</a></li>
                    </ul>
                </div>
                <div className="thirdText">
                    <h2 className="textTitle">Как выбрать свой идеальный нож?</h2>
                    <p className="textContent">Не знаешь, какой клинок тебе подойдёт? Напиши нам — поможем подобрать Златоустовские ножи купить которые будут радовать годами.</p>
                </div>
                <div className="fourthText">
                    <h2 className="textTitle">Почему нам можно доверять?</h2>
                    <ul className="textIm">
                        <li><a className="textContent" href=""><span className="textBold">Только оригиналы</span>  — никаких дешёвых подделок.</a></li>
                        <li><a className="textContent" href=""><span className="textBold">Быстрая доставка </span>— отправим в день заказа.</a></li>
                        <li><a className="textContent" href=""><span className="textBold">Гарантия качества </span>Гарантия качества — если что-то не так (хотя такого ещё не было), решим вопрос без лишних вопросов.</a></li>
                    </ul>
                </div>
                <hr />
                <div className="aboutBottomContent">

                    <div>
                        <p className="aboutBottomText">Златоустовские ножи — это не просто сталь, это характер. Выбирай своё оружие!</p>
                    </div>
                    <div className="aboutImages">
                        <div className="container">
                            <div className="aboutImageContent">

                                <div className="aboutImage">
                                    <img className="aboutBottomImage" src="./assets/img/car.png" alt="car" />
                                    <p>Доставка заказа от 2х дней</p>
                                </div>
                                <div className="aboutImage">
                                    <img className="aboutBottomImage" src="./assets/img/gift.png" alt="gift" />
                                    <p>Доставка курьером до двери</p>
                                </div>
                                <div className="aboutImage">
                                    <img className="aboutBottomImage" src="./assets/img/money.png" alt="money" />
                                    <p>
                                        Оплата заказа при получении</p>
                                </div>
                                <div className="aboutImage">
                                    <img className="aboutBottomImage" src="./assets/img/policy.png" alt="policy" />
                                    <p>Вся продукция сертифицирована <br /> и имеет сертификат соответствия</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default AboutUs;