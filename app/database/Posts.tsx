import Image from "next/image"
import DeleteBtn from "./DeleteBtn"

const Posts = ({ posts }) => {
  return (
    <section className='flex flex-wrap'>
      {posts.map((post: any, id: number) => (
        <article
          key={id}
          className='post-article m-[5px] bg-black mb-10 w-full flex flex-col rounded-lg'
        >
          <div className='relative'>
            <Image
              src={post.image}
              alt={post.creator}
              width={600}
              height={450}
              className='w-full object-cover rounded-t-lg'
            />
            <h3 className='group absolute top-0 right-0 px-2 py-1 bg-[#404040] text-[0.9rem] cursor-pointer'>
              By: {post.creator}
              <DeleteBtn id={post.id} />
            </h3>
          </div>
          <p className='p-5 border-t-[1px] border-white'>{post.post_text}</p>
        </article>
      ))}
    </section>
  )
}

export default Posts
