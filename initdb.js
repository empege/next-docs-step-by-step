// Ovaj file je ono node fazon - napravio ga/sam je radi pravljenja neke baze unapred, onda pokrene node initdb.js i ovaj fajl se pokrene i napravi nam tamo bazu. Ok, a nisam mogao to rucno jer vidis da ne mozes lepo ni da otvoris tu bazu, ko zna sta se tu sve napravi. I tek onda pravi posts.js file u libs gde radi sa tom bazom.

const sql = require('better-sqlite3')
// Pravi bazu ako ne postoji, ako postoji koristi ovaj fajl - vidi hoce li ga negde u projektu napraviti ili kako to radi?
const db = sql('posts.db')

const posts = [
  {
    creator: 'Djokica',
    post_text: 'Ovako moje oci dok radim xD',
    image: '/postimages/eye.gif'
  },
  {
    creator: 'Ficko',
    post_text: 'Matrix mi je omiljeni film, jos na japanskom :O',
    image: '/postimages/letters.gif'
  },
  {
    creator: 'Mica',
    post_text: 'Kako gotivan pixel art!',
    image: '/postimages/p1.gif'
  },
]

db.prepare(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      creator TEXT NOT NULL,
      post_text TEXT NOT NULL,
      image TEXT NOT NULL
    )
  `).run()

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO posts VALUES (
        null,
        @creator,
        @post_text,
        @image
      )
    `)

  for (const post of posts) {
    stmt.run(post)
  }
}

initData()

