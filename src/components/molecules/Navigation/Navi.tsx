import React from "react";
import {MapBtn} from "../../atoms/NaviBtn/MapBtn";
import {NewsBtn} from "../../atoms/NaviBtn/NewsBtn";
import {NotesBtn} from "../../atoms/NaviBtn/NotesBtn";
import {PropertiesBtn} from "../../atoms/NaviBtn/PropertiesBtn";
import {RentsBtn} from "../../atoms/NaviBtn/RentsBtn";
import {TenantsBtn} from "../../atoms/NaviBtn/TenantsBtn";


import "./Navi.css"


export const Navi = () => {
   return(
    <>
        <div className={"wrapper"}>
            <NewsBtn/>
            <PropertiesBtn/>
            <TenantsBtn/>
            <RentsBtn/>
            <NotesBtn/>
            <MapBtn/>
        </div>
    </>
   )
}