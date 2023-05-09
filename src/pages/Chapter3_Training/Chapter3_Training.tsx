import { Outlet } from 'react-router-dom'
import logo from '../../assets/logo-dummy-creations.svg'

function Chapter3_Training() {
  return (
    <div>
      <h1>
        <a href='/chapters/3_Training/about-us'>
          <img src={logo} width='323' height='32' alt='Dummy Creations' />
        </a>
      </h1>
      <ul>
        <li>
          <a href='/chapters/3_Training/about-us'>About Us</a>
        </li>
        <li>
          <a href='/chapters/3_Training/service'>Service</a>
        </li>
        <li>
          <a href='/chapters/3_Training/works'>Works</a>
        </li>
        <li>
          <a href='/chapters/3_Training/contact'>Contact</a>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Chapter3_Training
