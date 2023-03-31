import React from "react";
import {LogoBtn} from "../../molecules/LogoBtn/LogoBtn";
import {Navi} from "../../molecules/Navigation/Navi";

import './Header.css'


export const Header = () => {
    return (
        <>
            <div className={"headerWrapper"}>
                <LogoBtn/>
                <Navi/>
            </div>
        </>
    )
}