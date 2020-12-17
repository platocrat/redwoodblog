import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
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
      <p>This is the about page!</p>
    </>
  )
}

export default AboutPage
