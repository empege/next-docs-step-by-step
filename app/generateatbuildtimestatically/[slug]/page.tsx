// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  // const posts = await fetch("https://.../posts").then((res) => res.json())
  const posts = [{ slug: "prvi" }, { slug: "drugi" }, { slug: "treci" }]

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const Generateatbuildtimestatically = ({ params: { slug } }) => {
  return (
    <div className='wrapper'>
      <h1>Generate at build time statically:</h1>
      <h2>{slug}</h2>
    </div>
  )
}

export default Generateatbuildtimestatically
