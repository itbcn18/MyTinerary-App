//  COMPONENTE  --  "HEADER"  (Menú de navegación)

import React, {Component} from 'react';
// Imágenes a importar (Que aparecerán en esta página)
import user from '../images/userIcon.png';  
import menu from '../images/menuIcon.png';


class Account extends Component{
    render(){
        return(
            <div className="top">

                <nav>
                     <ul className="navBar">   
                        <li><a href="/users"><img src={user} alt="User Login"></img></a></li>
                        <li><a href="/"><img src={menu} alt="Menu"></img></a></li>
                     </ul>
                </nav>

                {/* <div className="login">
                    <img src={user} alt=""></img>
                </div> */}
                
                {/* <div className="menu">
                    <img src={menu} alt=""></img>
                </div> */}

            </div>

        )
    }

}

export default Account;