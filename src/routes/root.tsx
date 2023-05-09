import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
      <div id='sidebar'>
        <h1>html lessons</h1>
        <nav>
          <ul>
            <li>
              <a href={`/chapters/1`}>Chapter1</a>
            </li>
            <li>
              <a href={`/chapters/2`}>Chapter2</a>
            </li>
            <li>
              <a href={`/chapters/3`}>Chapter3</a>
            </li>
            <li>
              <a href={`/chapters/4`}>Chapter4</a>
            </li>
            <li>
              <a href={`/chapters/5`}>Chapter5</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}

export default Root