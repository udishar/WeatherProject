import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Style from '../Searchbar/searchbar.module.css'


export default function SearchBar(props){
    function HandleSearch(event) {
        props.HandleSearch(event.target.value);
      }
    return(
        <div className={Style.main}>
        <div className={Style.search}>
            <SearchIcon  className={Style.icon}/>
            <input placeholder='Search' className={Style.input} onChange={HandleSearch}/>
        </div>
        </div>
    )
}