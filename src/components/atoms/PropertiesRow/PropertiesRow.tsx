import React from "react";
import {PropertyEntity} from 'types';

interface Props {
    properties: PropertyEntity[];
}

export const PropertiesRow = (props: Props) => {

    return (
        <>
            {props.properties.map(property => (
                <tr key={property.id}>
                    <td>{property.id}</td>
                    <td>{property.name}</td>
                    <td>{property.street}</td>
                    <td>{property.place}</td>
                    <td>{property.postcode}</td>
                    <td>{property.postOfficeLoc}</td>
                    <td>{property.community}</td>
                    <td>{property.plotNo}</td>
                    <td>{property.landAndMortReg}</td>
                    <td>{property.area}</td>
                    <td>{property.isRent}</td>
                    <td>{property.description}</td>
                </tr>
            ))}
        </>
    )
    }
