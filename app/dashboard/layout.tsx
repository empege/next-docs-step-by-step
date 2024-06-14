'use client'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <h1>Layout moze biti klijent takodje :O</h1>
      <p>Ali sta to onda znaci? Ne vidim razliku jer se svejedno prerenderuje u network tabu html</p>
      <div>{children}</div>
    </section>
  )
}