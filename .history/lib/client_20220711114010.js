import SanityClientConstructor from '@sanity/client';

const sanityClient = require('@sanity/client')
const imageUrlBuilder= require ('@sanity/image-url')




export const client =SanityClientConstructor({
    projectId:'2dva7209',
    dataset:'production',
    apiVersion:'2022-07-09',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder=imageUrlBuilder(client);


export const urlFor=(source)=>builder.image(source)

