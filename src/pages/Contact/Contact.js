import './Contact.css';


function Contact() {
    return (
        <section className="contactSection">
            <div className="container">
                <div className="contactSectionContent">
                    <h2>Связаться с нами</h2>
                    <h4>Интернет магазин Златоустовских ножей</h4>
                    <div className="contactInformation">
                        <div className="phoneNumber">
                            <div className="phoneNumberOne">
                                <img className='phoneImage' src="./assets/img/telephone.png" alt="phoneNumber" />
                                <h3 className='phones'>Телефон</h3>
                                <p>8-800-777-49-67
                                </p>
                            </div>
                            <div className="elsePhoneNumber">
                                <img className='phoneImage' src="./assets/img/telephone.png" alt="phoneNumber" />
                                <h3 className='phones'>Дополнительные контактные данные:</h3>
                                <p>+7-9000-28-28-24</p>
                                <p>+7 996 690-09-96</p>
                            </div>
                            <div className="apps">
                                <a href="https://vk.com/">
                                    <img src="./assets/img/wkontact.png" alt="wkontakt" />
                                </a>
                                <a href="https://www.whatsapp.com/">
                                    <img src="./assets/img/whatsapp.png" alt="whatsapp" />
                                </a>
                                <a href="https://web.telegram.org/">
                                    <img src="./assets/img/telegram.png" alt="telegram" />
                                </a>
                            </div>
                        </div>
                        <div className="email">
                            <div className='emailName'>
                                <img className='emailImage' src="./assets/img/email.png" alt="email" />
                                <h3 className='emails'>Email <br />
                                Общие вопросы</h3>
                                <p>info@zlatmax.ru</p>
                            </div>
                            <div className='questionsEmail'>
                                <h3 className='emails'>По вопросам сотрудничества</h3>
                                <p>smirnov@zlatmax.ru</p>
                            </div>
                        </div>
                        <div className="workTime">
                            <img className='timeImage' src="./assets/img/time.png" alt="time" />
                            <h3 className='times'>График работы</h3>
                            <p>Пн-Пт: 7:00 - 16:00 МСК</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;