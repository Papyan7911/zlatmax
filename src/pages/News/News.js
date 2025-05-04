import './News.css'

function News() {
    return(
       <section className='newSection'>
        <div className="container">
            <div className="newSectionContent">
                 <h2>Наши статьи</h2>
                 <div className='newsText'>
                    <p>
                    В этом блоге публикуются наши новости, информация о сталях, уходу и заточке. Здесь вы найдете советы о том, как правильно хранить и ухаживать за ножами, советы по применению златоустовских ножей, как правильно выбрать сталь и материалы для рукояти ножей и многое другое. <br /><br />

Всё самое актуальное в одном месте. 
                    </p>
                 </div>
                 <div className='newsCardContent'>
                    <div className="newsCard">
                        <img src="./assets/img/newsImage.jpg" alt="" />
                        <h2>Всё о сталях</h2>
                    </div>
                    <div className="newsCard">
                    <img src="./assets/img/newsImageTwo.jpg" alt="" />
                    <h2>Лайфхаки</h2>
                    </div>
                    <div className="newsCard">
                    <img src="./assets/img/newsImageThree.jpg" alt="" />
                    <h2>Новости</h2>
                    </div>
                 </div>
            </div>
        </div>
       </section>
    );
}
export default News;