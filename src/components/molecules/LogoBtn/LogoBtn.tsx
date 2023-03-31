import React from "react";
import {LogoIcon} from "../../atoms/LogoIcon/LogoIcon";

import "./LogoBtn.css";


export const LogoBtn = () => {
    return (
        <>
            <div className={"LogoBtnWrapper"}>
                <LogoIcon/>
                Moje Nieruchomości
            </div>
        </>
    )
}