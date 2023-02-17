
export async function FetchPokemon(id){
  
  const resp = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`,{cache:'force-cache'});
 return resp.json();
  
}
export default async function Details( {params}) {
  const id=params.id;
  const pokemon =await FetchPokemon(id);
  if(!pokemon)
    return null
  return (
    <div className='flex space-x-4 space-y-5'>
      <img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`} alt="" className='w-36' />
    </div>
  )
}
export async function generateStaticParams(){
  const res=await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
  const pokemons=await res.json();
  return pokemons.map(
    pokemonn=>({id:pokemonn.id.toString()})
  )
}
