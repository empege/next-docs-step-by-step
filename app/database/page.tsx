import { getPosts } from "@/lib-tutorial-folder/posts"
import PostsSection from "./Posts"
import { Suspense } from "react"
import LoadingSkeleton from "../ui/LoadingSkeleton"
import Form from "./Form"
import LayoutBtn from "./LayoutBtn"

const Posts = async () => {
  const posts = await getPosts()
  return <PostsSection posts={posts} />
}

const DatabasePage = () => {
  return (
    <div className='px-20 max-w-[1200px] mx-auto mt-20'>
      <h1>Database stranica</h1>
      <p>
        Na ovoj stranici koristim sqlite3 paket instaliran sa npm install
        sqlite3, kako bih imao neku lokalnu bazu da pocnem da vezbam i rad sa
        time, iako nije deo dokumentacije koju citam uz ovo, ovde gledam udemy
        kurs
      </p>
      <div className='text-left w-full mt-20 flex gap-10'>
        <div className='w-5/12'>
          <h2 className='mb-5'>Dodaj post</h2>
          <Form />
        </div>
        <div className='w-7/12 relative'>
          <h2>Posts:</h2>
          <LayoutBtn />
          <Suspense fallback={<LoadingSkeleton text='Loading Posts...' />}>
            <Posts />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default DatabasePage
