import './Secondsection.css';


function Secondsection() {
  return (
   <section className='secondsection'>
    <div className="container">
        <div className="secondsectionContent">
           <div className="secondsectionTop">
            <div className="secondsectionTopText">

                <h2>Интернет магазин сертифицированных <br /> <span>златоустовских ножей</span>  </h2>
                <p> <span>Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине  <br /></span>
представлен наиболее широкий выбор Златоустовских ножей от Златоустовских 
Оружейных Фабрик и компаний, мы являемся официальными поставщиками.</p>
                <button>Подробнее</button>
            </div>
            <div className="secondsectionTopImg">
                <img src="./assets/img/knife.png" alt="" />
            </div>
            </div>
           <div className="secondsectionBottom">
            <div className='secondsectionDiv'>
                <div className="secondsectionImg">
                    <img src="./assets/img/firstImg.png" alt="" />
                </div>
                <div className="secondsectionText">
                    <p>Гарантия 100% возврата <br />
                    денежных средств</p>
                </div>
            </div>
            <div className='secondsectionDiv'>
                <div className="secondsectionImg">
                    <img src="./assets/img/secondImg.png" alt="" />
                </div>
                <div className="secondsectionText">
                    <p>Доставка по России, <br />
                    Казахстану и Белоруссии</p>
                </div>
            </div>
            <div className='secondsectionDiv'>
                <div className="secondsectionImg">
                    <img src="./assets/img/thirdImg.png" alt="" />
                </div>
                <div className="secondsectionText">
                    <p>Возможность оформление <br />
                    заказа без регистрации.</p>
                </div>
            </div>
            <div className='secondsectionDiv'>
                <div className="secondsectionImg">
                    <img src="./assets/img/fourthImg.png" alt="" />
                </div>
                <div className="secondsectionText">
                    <p>Скидки постоянным <br />
                    покупателям. </p>
                </div>
            </div>
           </div>
           </div>
        </div>
   </section>
  );
}

export default Secondsection;
