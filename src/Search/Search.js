import React, { useState } from 'react'
import {Users} from '../Data/Users'
import '../App.css'
const Search = () => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    }

    return (
        <div className='search'>
            <h1>Parspec Search Assignment</h1>
            <div className='search-container'>
                <div className='search-inner'>
                    <input type="text" value={value} onChange={onChange}/>
                    <button onClick={()=>onSearch(value)}>Search</button>
                </div>
                <div className='dropdown'>
                    {Users.filter((item)=>{
                        const searchTerm = value.toLowerCase();
                        const id = item.id.toLowerCase();
                        const name = item.name.toLowerCase();
                        const address = item.address.toLowerCase();
                        const pincode = item.pincode.toLowerCase();

                        return (
                            searchTerm && ((name.includes(searchTerm) && name !== searchTerm) || (id.includes(searchTerm) && id !== searchTerm) || (address.includes(searchTerm) && address !== searchTerm) || (pincode.includes(searchTerm) && pincode !== searchTerm))
                        );
                    })
                    .slice(0,10)
                    .map((item) => (
                        <div 
                        onClick={()=> onSearch(item.name)}
                        className = "dropdown-row"
                        key = {item.id}
                        >
                            {item.id}
                            <br/>
                            {item.name}
                            <br/>
                            <br/>
                            {item.address}, {item.pincode}
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Search