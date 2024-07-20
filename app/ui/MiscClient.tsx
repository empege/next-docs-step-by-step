"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const MicsClient = () => {
  const router = useRouter()
  return (
    <div>
      <h2>Use router push to FORM page</h2>
      <button className='button active' onClick={() => router.push("/form")}>
        useRouter push ➡️
      </button>
      <p>
        router.prefetch() moze da se koristi da programski prefatchujes nesto -
        npr Link komponenta to radi cim je link u viewportu, ali s ovim mozes i
        bez toga
      </p>
      <p>
        Sto se Linka jos tice: Only the shared layout, down the rendered "tree"
        of components until the first loading.js file, is prefetched and cached
        for 30s. This reduces the cost of fetching an entire dynamic route, and
        it means you can show an instant loading state for better visual
        feedback to users. You can disable prefetching by setting the prefetch
        prop to false. Alternatively, you can prefetch the full page data beyond
        the loading boundaries by setting the prefetch prop to true.
      </p>
    </div>
  )
}

export default MicsClient
