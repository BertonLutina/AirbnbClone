import React from 'react'
import Banner from './Banner'
import  Card  from './Card'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Banner/>
            <div className="home_section">
                <Card 
                 src="https://picsum.photos/id/237/500/500"
                 title="Online Experiences"
                 description="De documentaire toonde de werkomstandigheden in een distributiecentrum"
                 />
                <Card 
                 src="https://picsum.photos/id/478/500/500"
                 title="Unique stays"
                 description="Op 25 juli 2012 kwam Zalando op negatieve wijze in het nieuws "
                 />
                <Card 
                 src="https://picsum.photos/id/375/500/500"
                 title="Entire homes"
                 description="De media en op de facebookpagina van 
                    Zalando"
                 />
            </div>
            <div className="home_section">
                <Card 
                 src="https://picsum.photos/id/401/500/500"
                 title="Far away"
                 description="Het bedrijf beloofde vervolgens beterschap"
                 price="€500"
                 />
                <Card 
                 src="https://picsum.photos/id/393/500/500"
                 title="Penthouse"
                 description="Op 14 april 2014 kwamen de werkomstandigheden"
                 price="€600"
                 />
                <Card 
                 src="https://picsum.photos/id/287/500/500"
                 title="Loving days"
                 description="Ook Lobig verbleef undercover in het"
                 price="€800"
                 />
            </div>
        </div>
    )
}

export default Home
