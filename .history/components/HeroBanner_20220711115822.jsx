import Link from 'next/link'
import React from 'react'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container' >
        <div>
            <p className='beats-solo'>{heroBanner.smallText} </p>
            <h3>MID TEXT</h3>
            <img src="" alt="switch"  className='hero-banner-image'/>
            <div>
                <Link href='/product/ID' >
                    <button type='button' >BUTTON TEXT</button>
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