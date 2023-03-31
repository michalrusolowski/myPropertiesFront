import React from "react";
import {Header} from "../../organisms/Header/Header";
import {PropertiesList} from "../../molecules/PropertiesList/PropertiesList";

import "./Properties.css";

export const Properties = () => {
    return (
        <>
            <div className={"testowa"}>
                <Header/>
                <PropertiesList/>
            </div>
        </>
    )
}