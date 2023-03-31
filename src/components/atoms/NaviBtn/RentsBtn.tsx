import React from "react";

import './NaviBtn.css';
import {NavLink} from "react-router-dom";

export const RentsBtn = () => {
    return(
        <>
            <NavLink to="/test" className={"test"}><span className="material-symbols-outlined">real_estate_agent</span>Czynsze</NavLink>
        </>
    )
}