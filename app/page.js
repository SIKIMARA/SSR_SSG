
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

import Pokemon from './Pokemon'

const inter = Inter({ subsets: ['latin'] })
export async function FetchPokemon(){
  const resp = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json',{cache:'no-cache'});
 return resp.json();
  
}

 async function Home() {
  const pokemon =await FetchPokemon();
  return (
    <main  className='space-x-3 space-y-3 flex flex-wrap'>
     {pokemon?.map((poke)=>(<Pokemon pokemon={poke}></Pokemon>))}
    </main>
  )
}

export default Home