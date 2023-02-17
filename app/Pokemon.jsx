import Link from 'next/link'
import React from 'react'

export default function Pokemon({pokemon}) {
  return (
   
    <div className='bg-slate-300  w-1/6 border-solid border-spacing-2 border-2 border-black'>
        <Link href={`/pokemon/${pokemon.id}`} >
        <img className='w-full' src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`} />
        <div>
            <h3 className='border-lime-400'>{pokemon.name}</h3>
        </div>
        </Link>
    </div>
    
  )
}
