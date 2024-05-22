import { Link } from 'react-router-dom';
import './navbar.css'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">
                    <img src="logoEsron.png" width={'100rem'} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/discography">DISCOGRAFIA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/photos">FOTOS</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to={"https://music.apple.com/br/artist/esron/1184717176"} target='_blanket'>
                                <img src="./icon-apple.svg" alt="" className="nav-icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"https://open.spotify.com/intl-pt/artist/0NtMSIZBlBKNaH9DZDNDyt?si=uTlBUJJJRfCbBvCLwOwtoQ"} target='_blanket'>
                                <img src="./icon-spotify.svg" alt="" className="nav-icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"https://www.youtube.com/channel/UCQlHbqE9FRJsVjbyAdGruOw"} target='_blanket'>
                                <img src="./icon-youtube.svg" alt="" className="nav-icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"https://www.instagram.com/esronlinhares/"} target='_blanket'>
                                <img src="./icon-instagram.svg" alt="" className="nav-icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"https://www.tiktok.com/@esrondev"} target='_blanket'>
                                <img src="./icon-tiktok.svg" alt="" className="nav-icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;