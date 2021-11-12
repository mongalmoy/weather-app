import React from 'react';

function Display(props) {
    const d = new Date();
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return(
        <div>
            <div className='display'>
            <div className='display-2'>
                <div className='left-container' >
                    <div className='day-city'>
                        <h1>{weekDays[d.getDay()]}</h1>
                        <h4>{props.city}, {props.country}</h4>

                    </div>
                    <div className='temp'>
                        <div className='weather-condition'>
                            <h1><span>{Math.round(props.temp)}</span>&deg;C</h1>
                            <h4>{props.weatherCondition}</h4>
                        </div>
                        <div className='weather-icon'>
                            <img src={props.imageLink} alt='image-icon'/>
                        </div>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='properties'>
                    <div className='name-value'>
                        <h4>Feels Like <span className='value'><h4>{props.feelsLike}</h4> &#176;C</span></h4>
                    </div>
                    <div className='name-value'>
                        <h4>Humidity <span className='value'>{props.humidity} %</span></h4>
                    </div>
                    <div className='name-value'>
                        <h4>Air Pressure <span className='value'><h4>{Math.round(props.pressure)}</h4> hPa</span></h4>
                    </div>
                    <div className='name-value'>
                        <h4>Max Temp <span className='value'><h4>{Math.round(props.maxTemp) }</h4> &#176;C</span></h4>
                    </div>
                    <div className='name-value'>
                        <h4>Max Temp <span className='value'><h4>{Math.round(props.minTemp)}</h4> &#176;C</span></h4>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Display;