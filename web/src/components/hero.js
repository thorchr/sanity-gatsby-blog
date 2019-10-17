import React from 'react'
import LazyHero from 'react-lazy-hero'



const Hero = ()  => (

        <div>
            <LazyHero 
            imageSrc={`luftbilde.jpg`}
            parallaxOffset={100}
            >
           
            <h1>ET GODT STED Å BO</h1>
            </LazyHero>

            {/* ... */}
        </div>


	)
 
export default Hero