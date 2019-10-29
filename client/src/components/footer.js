//   COMPONENTE  -  "FOOTER"

import React, {Component} from 'react';
import GoHome from '../images/homeIcon.png';


class Footer extends Component{
    render(){
        return(
            <div className="foot">

                <div className="go-home">
                    <a href="/"><img src={GoHome} alt="Home Page"></img></a>
                </div>

            </div>

        )
    }

}

export default Footer;