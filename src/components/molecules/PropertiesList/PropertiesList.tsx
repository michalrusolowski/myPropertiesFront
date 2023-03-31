import React, {useEffect, useState} from "react";
import {PropertyEntity} from "types";
import {PropertiesRow} from "../../atoms/PropertiesRow/PropertiesRow";

import "./PropertiesList.css"


export const PropertiesList = () => {
    const [propertyData, setPropertyData] = useState<PropertyEntity[] | null>(null);

    const fetchPropertiesData = async (): Promise<PropertyEntity[]> => {
        const res = await fetch("http://localhost:3001/property");
        return res.json();
    };

    useEffect(() => {
        fetchPropertiesData().then((data) => {
            setPropertyData(data);
        });
    }, []);

    if (propertyData === null) {
            return <div>Loading...</div>;
        }

    return(
        <>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nazwa</th>
                    <th>ulica</th>
                    <th>miejscowość</th>
                    <th>kod pocztowy</th>
                    <th>poczta</th>
                    <th>gmina</th>
                    <th>numer działki</th>
                    <th>Nr Księgi Wieczystej</th>
                    <th>powierzchnia</th>
                    <th>czy wynajęta</th>
                    <th>opis</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <PropertiesRow properties={propertyData}/>
                </tr>
                </tbody>
            </table>
        </>
    )
}