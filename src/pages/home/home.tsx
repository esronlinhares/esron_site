import './home.css'

//testando

function Home() {
    return (
        <>
            <main>
                <h1 className='title'> ESRON </h1>

                <div id="carouselFade" className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./discoteca-vinil.png" className="carousel-image" alt="esron" />
                        </div>
                        <div className="carousel-item">
                            <img src="./discoteca-cassete.png" className="carousel-image" alt="esron" />
                        </div>
                        <div className="carousel-item">
                            <img src="./discoteca-cd.png" className="carousel-image" alt="esron" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className='video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3b48zLcdxe4?si=DZ8mRj_oDdR6YEL1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </main>

            <footer>
                <h1 className='footer'>Desenvolvido por Esron</h1>
            </footer>
        </>
    );
}

export default Home;