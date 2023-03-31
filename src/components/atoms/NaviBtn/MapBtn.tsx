import React from "react";
import {NavLink} from "react-router-dom";

import './NaviBtn.css';

export const MapBtn = () => {
    return(
    <>
        <NavLink to="/test" className={"test"}><span className="material-symbols-outlined">map</span>Mapa</NavLink>
    </>
    )
}



/*<div>
    <span className="material-symbols-outlined">map</span><button>Mapa</button>
</div>*/