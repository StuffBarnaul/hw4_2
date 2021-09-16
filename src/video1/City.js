import React from 'react';

export default function City(props) {

    const city = props.cities[props.index]

    return <>
        <h1>{city.name}</h1>
        <textarea value={city.desc} onChange={props.onChange}/>
    </>

}