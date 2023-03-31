import React from "react";

import './NaviBtn.css';
import {NavLink} from "react-router-dom";

export const NotesBtn = () => {
    return(
        <>
            <NavLink to="/test" className={"test"}><span className="material-symbols-outlined">edit_note</span>Notatki</NavLink>
        </>
    )
}