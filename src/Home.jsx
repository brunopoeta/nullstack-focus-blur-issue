import Nullstack from 'nullstack'
import Logo from 'nullstack/logo'

import './Home.css'

class Home extends Nullstack {

  prepare({ project, page, greeting }) {
    page.title = `${project.name} - ${greeting}`
    page.description = `${project.name} foi feito com Nullstack`
  }

  renderLink({ children, href }) {
    const link = `${href}?ref=create-nullstack-app`
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  render({ project, greeting }) {
    return (
      <section>
        <article>
          <Link href="https://nullstack.app/pt-br">
            <Logo height={60} light />
          </Link>
          <h1> {project.name} </h1>
          <p> {greeting} </p>
          <input onfocus={() => console.log('FOCUS')} onblur={() => console.log('BLUR')} />
        </article>
      </section>
    )
  }

}

export default Home
