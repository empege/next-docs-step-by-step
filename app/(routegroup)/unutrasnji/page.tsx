import React from 'react'

const RouteGroup = () => {
  return (
    <div className='wrapper'>
      <h1 className='self-start'>RouteGroup - Unutrasnji (Level 2)</h1>
      <p>
        Ovo ti izbaci ako imas dva page (u (routegroup) i ispod, a ako imas samo
        u (routegroup) svakako nema sta da prikaze jer se taj ne vazi:
      </p>
      <p>
        You cannot have two parallel pages that resolve to the same path. Please
        check /page and /(routegroup)/page. Refer to the route group docs for
        more information:
        https://nextjs.org/docs/app/building-your-application/routing/route-groups
      </p>
      <p>
        Sluzi da imas laksi i bolji pregled, u uzimaju se u obzir za url, ALI
        svaki moze da ima svoj layout, i sa ovim mozes da podelis da imas vise
        RootLayouta! (svaki mora da ima html i body naravno, i menjanjem sa
        jednog na drugi dolazi do full page refresha naravno)
      </p>
    </div>
  )
}

export default RouteGroup
