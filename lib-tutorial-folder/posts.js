import sql from 'better-sqlite3'

const db = sql('posts.db')

// Ova fja uopste ne mora da bude async, kao ni page.tsx koji je koristi (databasePage), ali ovde hoce da pokaze da moze i kako bi npr izgledao loading
export async function getPosts() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  // .run() za insert/change data,
  // .all() za fetch date
  // .get() ako trazis single row
  return db.prepare('SELECT * FROM posts').all()
}