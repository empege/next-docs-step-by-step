import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'

const db = sql('posts.db')

// Ova fja uopste ne mora da bude async, kao ni page.tsx koji je koristi (databasePage), ali ovde hoce da pokaze da moze i kako bi npr izgledao loading
export async function getPosts() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  // .run() za insert/change data,
  // .all() za fetch date
  // .get() ako trazis single row
  return db.prepare('SELECT * FROM posts').all()
}

export async function savePost(post) {
  console.log(post)
  post.slug = slugify(post.creator, { lower: true })
  post.post_text = xss(post.post_text)

  const extension = post.image.name.split('.').pop()
  const fileName = `${post.slug}.${extension}`

  const stream = fs.createWriteStream(`public/postimages/${fileName}`)
  const bufferedImage = await post.image.arrayBuffer()

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed! From Myself')
    }
  })

  post.image = `/postimages/${fileName}`

  // Ovaj nacin sa @ je kao nesto da te sacuva od injecta, ali nista ne znam kako ovo funkcionise jos
  db.prepare(`
      INSERT INTO posts
        (creator, post_text, image)
      VALUES (
        @creator,
        @post_text,
        @image
      )
    `).run(post)
}

export async function unsavePost(id) {
  console.log(id)

  db.prepare(`
      DELETE FROM posts
      WHERE id = @id
    `).run(id)
}