import React from "react";

import './NaviBtn.css';
import {NavLink} from "react-router-dom";

export const TenantsBtn = () => {
    return(
        <>
            <NavLink to="/test" className={"test"}><span className="material-symbols-outlined">group</span>Najemcy</NavLink>
        </>
    )
}