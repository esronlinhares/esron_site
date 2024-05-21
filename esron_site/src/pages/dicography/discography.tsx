import './discography.css'

function Discography() {
    return (
        <div>
            <main className="discography">

                <h1 className="title"> DISCOGRAFIA </h1>

                <div className="albums">
                    <div className="album">
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/album/6lzPRLf3zqeBU9vgZxCfNs?utm_source=generator&theme=0"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className="album">
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/album/2HpMvQwZfXsEDmilve1R4K?utm_source=generator&theme=0"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className="album">
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/album/1OdZz3gJN7fmVXgME0jlPW?utm_source=generator&theme=0"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </main>

            <footer>
                <h1 className='footer'>Desenvolvido por Esron</h1>
            </footer>
        </div>

    );
}

export default Discography;