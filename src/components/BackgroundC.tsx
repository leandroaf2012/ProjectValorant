//O 'C' foi colocado pois o nome 'Background' não funcionava.

import  React from 'react';
import ReactLogo from './assets/ValorantTexto.svg'

export function BackgroundC() {
    
    return(
        <div>
            <div className="backg">
                <p>AQUI VAI FICAR O VIDEO</p>
            </div>
            <div className="textDiv">
                <p>A 5v5 character-based tactical shooter</p>
                <img src={ReactLogo} alt="Valorant Name" className="valorantText"/>
            </div>
        </div>
 
    );
}
