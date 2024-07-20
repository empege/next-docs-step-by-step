const Layout = ({ children, page1, page2 }) => {
  return (
    <div className='flex'>
      {page1}
      {page2}
    </div>
  )
}

export default Layout
