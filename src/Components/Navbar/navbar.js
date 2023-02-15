import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Style from '../Navbar/navbar.module.css'


export default function Navbar(){
    return(
        <div className={Style.main}>
            <header className={Style.header}>
                <nav className={Style.nav}>
                       <WbSunnyIcon className={Style.Icon}/>
                    <h2>
                       WeatherApp
                    </h2>  
                </nav>
            </header>
        </div>
    )
}