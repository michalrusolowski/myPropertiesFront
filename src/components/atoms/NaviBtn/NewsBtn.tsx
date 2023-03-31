import React from "react";

import './NaviBtn.css';
import {NavLink} from "react-router-dom";


export const NewsBtn = () => {
    return(
        <>
            <NavLink to="/test" className={"test"}><span className="material-symbols-outlined">home</span>Aktualności</NavLink>
        </>
    )
}