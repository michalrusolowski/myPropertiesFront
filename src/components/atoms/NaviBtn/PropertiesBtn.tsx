import React from "react";

import './NaviBtn.css';
import {NavLink} from "react-router-dom";

export const PropertiesBtn = () => {
    return(
        <>
            <NavLink to="/test" className={"test"}><span className="material-symbols-outlined">map</span>Nieruchomości</NavLink>
        </>
    )
}