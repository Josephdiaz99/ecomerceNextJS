import React from 'react'
import { client } from '../lib/client'
import {Product,FooterBanner,HeroBanner} from '../components'
import banner from '../sanity_ecomerce/schemas/banner'

const Home = ({products,bannerData}) => {


  return (
    
    <div>
      <HeroBanner  />
      {console.log(bannerData)}
      <div className='products-heading' >
        <h2>Best Selling Products</h2>
        <p>Los mejores productos del hemisferio</p>
      </div>

      <div className='products-container' >
       {products?.map((product)=>product.name)}
      </div>

    <FooterBanner     />
    </div>
    
  )
}


export const getServerSideProps=async()=>{
  const query='*[_type=="product"]';
  const products=await client.fetch(query)

  const bannerQuery='*[_type=="banner"]'
  const bannerData=await client.fetch(bannerQuery)

  console.log(products)


  return {
    props:{products,bannerData}
  }
}



export default Home