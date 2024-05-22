import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

function NavBar() {
    return (
        <header className='header'>
            <a href="/"><img src="./logoEsron.png" alt="" className='logo'/></a>

            <nav className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/discography">Discografia</Link>
                <Link to="/photos">Fotos</Link>
            </nav>

            <nav>
                <a href="https://music.apple.com/br/artist/esron/1184717176" target='_blanket'><img src="./icon-apple.svg" alt="" className='icon'/></a>
                <a href="https://open.spotify.com/intl-pt/artist/0NtMSIZBlBKNaH9DZDNDyt?si=DR53tyE5RW2OaRtXUVQPRA" target='_blanket'><img src="./icon-spotify.svg" alt="" className='icon'/></a>
                <a href="https://www.youtube.com/channel/UCQlHbqE9FRJsVjbyAdGruOw" target='_blanket'><img src="./icon-youtube.svg" alt="" className='icon'/></a>
                <a href="https://www.instagram.com/esronlinhares/" target='_blanket'><img src="./icon-instagram.svg" alt="" className='icon'/></a>
                <a href="https://www.tiktok.com/@esron.dev" target='_blanket'><img src="./icon-tiktok.svg" alt="" className='icon'/></a>
            </nav>
        </header>
    );
}

export default NavBar;