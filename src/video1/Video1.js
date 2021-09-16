import React, {useState} from 'react';
import City from "./City";
import CityList from "./CityList";

export default function Video1() {

    const [cities,setCities] = useState([
        {name: 'city1', desc: 'desc1'},
        {name: 'city2', desc: 'desc2'},
    ])

    const [currentIndex, setCurrentIndex] = useState(0)

    const onSelect = (e) => {
        setCurrentIndex(e)
    }

    const onChange = (e) => {
        setCities(cities.map((city, index) => {
            if (index === currentIndex) {
                return {
                    ...city,
                    desc: e.target.value,
                }
            }
            return city
        }))
    }

    return <>
        <City cities={cities} index={currentIndex} onChange={onChange}/>
        <CityList cities={cities} onSelect={onSelect}/>
    </>

}