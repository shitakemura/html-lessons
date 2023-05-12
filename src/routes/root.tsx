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
              <a href={`/chapters/3_Training`}>Chapter3_Training</a>
            </li>
            <li>
              <a href={`/chapters/4_1`}>Chapter4_1</a>
            </li>
            <li>
              <a href={`/chapters/4_2`}>Chapter4_2</a>
            </li>
            <li>
              <a href={`/chapters/4_Training`}>Chapter4_Training</a>
            </li>
            <li>
              <a href={`/chapters/5`}>Chapter5</a>
            </li>
            <li>
              <a href={`/chapters/5_Training`}>Chapter5_Training</a>
            </li>
            <li>
              <a href={`/chapters/practice`}>Practice</a>
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
