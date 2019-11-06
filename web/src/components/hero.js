import React from 'react'
import LazyHero from 'react-lazy-hero'




const Hero = ()  => (

        <div>
            <LazyHero 
            imageSrc={`luftbilde.jpg`}
            parallaxOffset={100}
            >
           
            <h1>Velkommen til Øreåsen borettslag</h1>
            <h2>ET GODT STED Å BO</h2>
            </LazyHero>

            {/* ... */}
        </div>


	)
 
export default Hero