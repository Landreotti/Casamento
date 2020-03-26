import React from 'react';
import logo from '../../assets/images/logo.png';


function Header(){
    return <>
        <div className="Header">
            <div className="HeaderNames">
                <div>
                    <h1>
                        Taciana
                    </h1>
                    <h2 className="SobrenomeNoiva">
                        Lima
                    </h2>
                </div>
                <img src={logo}/>
                <div>
                    <h1>
                        Leandro
                    </h1>
                    <h2>
                        Andreotti
                    </h2>
                </div>    
            </div>
        </div>
    </>
} 

export default Header;