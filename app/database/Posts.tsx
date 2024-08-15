import Image from "next/image"
import React from "react"

const Posts = ({ posts }) => {
  return (
    <div>
      <h2 className='my-10'>Posts:</h2>
      <section className='flex flex-wrap'>
        {posts.map((post: any, id: number) => (
          <article
            key={id}
            className='bg-black mb-10 w-full flex even:flex-row-reverse rounded-lg'
          >
            <div className='relative w-1/2'>
              <Image
                src={post.image}
                alt={post.creator}
                width={0}
                height={0}
                className='w-auto h-[300px] object-cover rounded-lg'
              />
              <h3 className='absolute bottom-0 px-2 py-1 bg-[#404040] text-[0.9rem]'>
                By: {post.creator}
              </h3>
            </div>
            <p className='w-1/2 p-5'>{post.post_text}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Posts
