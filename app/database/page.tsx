import { getPosts } from "@/lib-tutorial-folder/posts"
import Posts from "./Posts"

const DatabasePage = async () => {
  const posts = await getPosts()

  return (
    <div className='wrapper'>
      <h1>Database stranica</h1>
      <p>
        Na ovoj stranici koristim sqlite3 paket instaliran sa npm install
        sqlite3, kako bih imao neku lokalnu bazu da pocnem da vezbam i rad sa
        time, iako nije deo dokumentacije koju citam uz ovo, ovde gledam udemy
        kurs
      </p>
      <div className='text-left w-full mt-20'>
        <h2 className='mb-5'>Dodaj post</h2>
        <form action=''>
          <label className='block mb-5' htmlFor='creatorName'>
            Vase ime:
            <br />
            <input
              type='text'
              name='creatorName'
              id='creatorName'
              className='rounded-lg text-black px-2 py-1 w-[300px]'
            />
          </label>
          <label className='block mb-5' htmlFor='postText'>
            Tekst posta:
            <br />
            <textarea
              rows={6}
              name='postText'
              id='postText'
              className='rounded-lg text-black px-2 py-1 w-[300px] resize-none'
            ></textarea>
          </label>
          <label className='block mb-5' htmlFor='imageFile'>
            Uploaduj sliku:
            <br />
            <input
              type='file'
              name='imageFile'
              id='imageFile'
              className='rounded-lg text-black px-2 py-1 w-[300px]'
            />
          </label>
        </form>
        <Posts posts={posts} />
      </div>
    </div>
  )
}

export default DatabasePage
