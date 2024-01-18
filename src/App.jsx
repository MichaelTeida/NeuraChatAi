import './styles/App.scss'
import {Link, Outlet} from "react-router-dom";

function App() {

  return (
    <>
        <div>Hello there ;)</div>
        <nav>
            <Link to="/NeuraChatAi/">Homepage</Link>
            <div></div>
            <Link to="/NeuraChatAi/about">About</Link>
        </nav>
        {<Outlet />}
    </>
  )
}

export default App
