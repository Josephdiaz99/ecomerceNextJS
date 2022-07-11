import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'


const HeroBanner = ({heroBanner}) => {
    console.log(heroBanner)
  return (
    <div className='hero-banner-container' >
        <div>
            <p className='beats-solo'>{heroBanner.smallText} </p>
            <h3>{heroBanner.midText} </h3>
            <h1>{heroBanner.largeText1} </h1>
            <img src={urlFor(heroBanner.image)} alt="switch"  className='hero-banner-image'/>
            <div>
                <Link href={`/products/${HeroBanner.product} `} >
                    <button type='button' >{heroBanner.buttonText} </button>
                </Link>
                <div className='desc' >
                    <h5>Descripcion</h5>
                    <p>DESCRIPTION</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner