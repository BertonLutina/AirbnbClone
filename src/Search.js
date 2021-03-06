import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRangePicker} from 'react-date-range';
import './Search.css';
import  People  from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';


const Search = () => {
    const history = useHistory();
    const[startDate, setStartDate] = useState(new Date());
    const[endDate, setEndDate] = useState(new Date());
    const selectionRange = { 
            startDate : startDate,
            endDate : endDate,
            key : "selection",
            }

    function handleSelect (ranges){
            setStartDate(ranges.selection.startDate);
            setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]}
                onChange={handleSelect}/>
                <h2>
                    Number of guests
                        <People/>
                </h2>
                <input type="number" min={0} defaultValue={2}/>
                <Button onClick={() => history.push('/search')} >
                    Search airbnb
                </Button>
        </div>
    )
}

export default Search
