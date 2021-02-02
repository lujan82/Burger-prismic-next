import Link from 'next/link'
import Youtube from './icon/Youtube';
import Facebook from './icon/Facebook';
import Spotify from './icon/Spotify';
import Twitter from './icon/Twitter';
import Instagram from './icon/Instagram';

const Footer = () => {
    return (
        <footer>

            <div className="rrss">
                <div className="rrss--logo"></div>
                <div className="rrss--container">
                    <div className="rrss--item">
                        <a href="#"><Youtube /></a>
                    </div>                    
                    <div className="rrss--item">
                        <a href="#"><Facebook /></a>
                    </div>                    
                    <div className="rrss--item">
                        <a href="#"><Spotify /></a>
                    </div>                    
                    <div className="rrss--item">
                        <a href="#"><Twitter /></a>
                    </div>                    
                    <div className="rrss--item">
                        <a href="#"><Instagram /></a>
                    </div>                    
                </div>
            </div>

            <nav className="footer--nav">
                <ul>
                    <li>
                        <Link href="/about">
                            <a className="hover-effect" >ABOUT</a>
                        </Link>
                    </li> / 
                    <li>
                        <Link href="/location">
                            <a className="hover-effect" >LOCATION</a>
                        </Link>
                    </li> / 
                    <li>
                        <Link href="/">
                            <a className="hover-effect" >BURGER TOWN</a>
                        </Link>
                    </li> / 
                    <li>
                        <Link href="/contact">
                            <a className="hover-effect" >CONTACT</a>
                        </Link> 
                    </li> / 
                    <li>
                        <Link href="/news">
                            <a className="hover-effect" >NEWS</a>
                        </Link> 
                    </li>
                </ul>
            </nav>

            <div className="footer--info">
                <span>@Burger Town 2021.</span>
                <span>Todos los derechos reservados.</span>
                <span><a href="#">Aviso legal</a>.</span>
                <span><a href="#">Politica de cookies.</a></span>
                <span>Desarrollado por <a href="clujan.eu">cluján</a></span>
            </div>

        </footer>
    );
};

export default Footer;