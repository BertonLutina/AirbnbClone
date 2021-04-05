import { Button } from '@material-ui/core'
import React from 'react'
import './SearchePage.css'
import SearchResult from './SearchResult'

const SearchePage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage_info">
                <p>62 stays . 26 august to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and beds
                </Button>
                <Button variant="outlined">
                    More filters
                </Button>
            </div>
            <SearchResult
            img="https://picsum.photos/id/237/300/200" 
            location="Private room in center of London"  
            title="Stay at this spacious Edwardian House" 
            description="1 guest . 1 bedroom . 1 bed . 1,5 shared bathrooms . wifi"
            star={4.73} 
            price="€30 / night" 
            total="€117 total"
            />
            <SearchResult
            img="https://picsum.photos/id/380/300/200" 
            location="Private room in center of Birmingham"  
            title="Stay at this spacious GuyGeorge House" 
            description="1 guest . 1 bedroom . 3 bed . 1 shared bathrooms . wifi"
            star={4.88} 
            price="€50 / night" 
            total="€200 total"
            />
             <SearchResult
            img="https://picsum.photos/id/160/300/200" 
            location="Private room in center of Manchester"  
            title="Stay at this spacious Rooney House" 
            description="1 guest . 3 bedroom . 1 bed . 2 shared bathrooms . wifi"
            star={3.43} 
            price="€22 / night" 
            total="€102 total"
            />
            <SearchResult
            img="https://picsum.photos/id/653/300/200" 
            location="Private room in center of Leicester"  
            title="Stay at this spacious Laurence House" 
            description="2 guest . 1 bedroom . 1 bed . 1,5 shared bathrooms . wifi"
            star={5} 
            price="€90 / night" 
            total="€300 total"
            />
        </div>
    )
}

export default SearchePage
