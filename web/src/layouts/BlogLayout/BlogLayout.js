const BlogLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <div>
          <Link to={routes.about()}>About</Link>
        </div>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
