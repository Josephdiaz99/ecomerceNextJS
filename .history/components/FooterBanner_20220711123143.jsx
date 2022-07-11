import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({footerBanner}) => {
  return (
    <div className='footer-banner-container' >
        <div className='banner-desc' >
            <div className='lef'>
                <p>{footerBanner.discount} </p>
                <h3>{footerBanner.discount} </h3>
            </div>
            <div className='right' >

            </div>
        </div>
    </div>
  )
}

export default FooterBanner