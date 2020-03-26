import React, {useState} from 'react';
import {Link} from 'react-router-dom';



function Menu(){
    const {activeItem} = useState();
    const handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    return <> 
        <div className="Menu">
            <ul>
                <li>
                    <Link 
                        className="LinkHome" 
                        to="/Home"
                        name='Home'
                        active={activeItem === "Home"}
                        onClick={() => handleItemClick}
                    >Home</Link></li>
                <li><Link 
                        className="LinkNossaHistoria" 
                        to="/NossaHistoria"
                        name="NossaHistoria"
                        active={activeItem === "NossaHistoria"}
                        onClick={() => handleItemClick}
                    >Nossa História</Link></li>
                <li><Link className="LinkCasamento" to="/Casamento">Casamento</Link></li>
                <li><Link className="LinkFaleConosco" to="/FaleConosco">Contato</Link></li>
                <li><Link className="LinkGaleriaFotos" to="/GaleriaFotos">Galeria</Link></li>
            </ul>
        </div>
    </>     
}

export default Menu;