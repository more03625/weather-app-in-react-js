import React, {useState, useEffect} from 'react';
import '../index.css';

const Weatherapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=aab44a40c1118d8ebf2cd0cf5f611762`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
            console.log(resJson.main);
        }
        fetchApi();
    }, [search]);
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" onChange={ (event) => {setSearch(event.target.value)} }/>
                </div>
                {
                    !city ? (
                        <p className="errorMsg">No Data found!</p>
                    ) :
                    <>
                        <div className="info">
                            <p className="location">
                                <i className="fas fa-street-view faicon"></i>{search}
                            </p>
                            <h2 className="temp">
                                {city.temp}&#xb0; cel
                            </h2>

                            <h3 className="tempmin_max">
                                Min : {city.temp_min}&#xb0; Cel | Max : {city.temp_max}&#xb0; Cel
                            </h3>
                        </div>
                    </>
                }

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>
        </>
    )
}
export default Weatherapp;