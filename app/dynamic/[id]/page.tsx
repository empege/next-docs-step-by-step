const Dynamic = async ({ params }) => {
  // OVO BRISI SLOBODNO, CISTO DA SE VIDI LOADING
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <div className='wrapper'>
      <h1>Dynamic - Params: {params.id}</h1>
      <p>
        Iako je u kodu ubacen await new Promise, samo prvi put se vidi loading,
        jer kad se sve ucita, iako menjas stranice navigacijom, on ima vec sve u
        cachu?
      </p>
    </div>
  )
}

export default Dynamic
