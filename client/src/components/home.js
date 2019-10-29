//   PÁGINA DEL "HOME". Esta página puede llevar a otras (otras vistas: ejm --  cities.js)

import React, {Component} from 'react';
import logo from '../images/MYtineraryLogo.png';
import arrow from '../images/circled-right.png';

import {NavLink} from "react-router-dom";



class Home extends Component{
    render(){
        return(
            <div className="home-content">
                <h1>I'm Home Page</h1>
                <div className="logo">
                    <img src={logo} alt=""></img>
                    <p><b><i>Find your perfect trip designed by insiders who know and love their cities</i></b></p>
                   
                    <NavLink className="menu-item" to={"/cities"}>
                         <img src={arrow} alt="startImage"></img>
                    </NavLink>

                </div>

            </div>

        )
    }

}

export default Home;