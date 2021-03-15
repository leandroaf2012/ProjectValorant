import logo from '../components/assets/logo.svg';
import { TiArrowSortedDown } from 'react-icons/ti';

export function Header() {
    return (
        <header className="header-bar">
            
            <img src={logo} alt="logo"  id="logoRiot1" />

            <nav className="container">
                <header />

                <ul>
                    
                    <li>
                        <a href="">GAME INFO <TiArrowSortedDown color="gray" className="arrow"/></a> 
                    </li>
                    <li>
                        <a href="">MEDIA</a>
                    </li>
                    <li>
                        <a href="">NEWS</a>
                    </li>
                    <li>
                        <a href="">LEADERBOARDS</a>
                    </li>
                    <li>
                        <a href="">SUPPORT <TiArrowSortedDown color="gray" className="arrow"/></a>
                    </li>
                    <li>
                        <a href="">OUR SOCIALS <TiArrowSortedDown color="gray" className="arrow"/></a>
                    </li>

                </ul>
            </nav>

        </header>
    );
}