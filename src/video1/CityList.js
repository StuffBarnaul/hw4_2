import React from 'react';

export default function CityList(props) {

    return (
        <ul>
            {props.cities.map((city, i) => (
                <li key={city.name} onClick={() => props.onSelect(i)}>{city.name} - {city.desc}</li>
            ))}
        </ul>
    )

}