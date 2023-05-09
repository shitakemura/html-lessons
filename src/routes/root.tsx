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
              <a href={`/chapters/2_1`}>Chapter2_1</a>
            </li>
            <li>
              <a href={`/chapters/2_2`}>Chapter2_2</a>
            </li>
            <li>
              <a href={`/chapters/2_Training`}>Chapter2_Training</a>
            </li>
            <li>
              <a href={`/chapters/3_1`}>Chapter3_1</a>
            </li>
            <li>
              <a href={`/chapters/3_2`}>Chapter3_2</a>
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
