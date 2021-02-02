import Link from 'next/link'
import Logo from './icon/Logo';

const Nav = () => {
    return (
        <nav className="header-nav">
            <ul>
                <li>
                    <Link href="/about">
                        <a className="hover-effect">ABOUT</a>
                    </Link>
                </li>
                <li>
                    <Link href="/location">
                        <a className="hover-effect">LOCATION</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a><Logo /></a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className="hover-effect">CONTACT</a>
                    </Link>
                </li>
                <li>
                    <Link href="/news">
                        <a className="hover-effect">NEWS</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;