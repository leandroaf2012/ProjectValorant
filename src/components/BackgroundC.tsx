//O 'C' foi colocado pois o nome 'Background' não funcionava.

import ReactLogo from './assets/ValorantTexto.svg';

import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiGlobe } from 'react-icons/fi';
import retakered from './assets/retakered.mp4';

export function BackgroundC() {

    return(
        <div className="containerMain">
            <div className="imgdefundo"></div>
            <video muted autoPlay loop>
                <source src={retakered} type="video/mp4" />
            </video>

            <div className="textDiv">
                
                <p>A 5v5 character-based tactical shooter</p>
                <img src={ReactLogo} alt="Valorant Name" className="valorantText" />
                
                <button>
                    <div id="divButton">
                        <span>
                            play free
                        </span>
                        <section />
                    </div>
                </button>

            </div>

            

            <aside>
                <a href="https://www.facebook.com/VALORANTbrasil/" target="_blank">
                    <FiFacebook  size={40} className="iconsFi"/>
                </a>
                <a href="https://www.instagram.com/playvalorantofficial/"  target="_blank">
                    <FiInstagram size={40} className="iconsFi"/>
                </a>
                <a href="https://playvalorant.com/" target="_blank">
                    <FiGlobe size={40} className="iconsFi"/>
                </a>
            </aside>
        </div>
 
    );
}
