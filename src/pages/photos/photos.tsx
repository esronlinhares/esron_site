import './photos.css'

function Photos() {
    return (
        <div>
            <main>
                <h1 className="title">FOTOS</h1>

                <div className="container text-center">
                    <div className="row row-cols-3">
                        <div className="col"><img className='image' src="./esron1.jpg" alt="esron" /></div>
                        <div className="col"><img className='image' src="./esron2.jpg" alt="esron" /></div>
                        <div className="col"><img className='image' src="./esron3.jpg" alt="esron" /></div>
                        <div className="col"><img className='image' src="./esron4.jpg" alt="esron" /></div>
                        <div className="col"><img className='image' src="./esron5.jpg" alt="esron" /></div>
                        <div className="col"><img className='image' src="./esron6.jpg" alt="esron" /></div>
                        <div className="col"><img className='image' src="./esron7.jpg" alt="esron" /></div>
                        <div className="col"><img className='image' src="./esron8.jpg" alt="esron" /></div>
                        <div className="col"><img className='image' src="./esron9.jpg" alt="esron" /></div>
                    </div>
                </div>
            </main>

            <footer>
                <h1 className='footer'>Desenvolvido por Esron</h1>
            </footer>
        </div>
    );
}

export default Photos;