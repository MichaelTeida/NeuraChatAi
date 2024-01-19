import './styles/App.scss'
import {Link as RouterLink, Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <div>Hello there ;)</div>
            <nav>
                <RouterLink to="/NeuraChatAi/">Homepage</RouterLink>
                <div></div>
                <RouterLink to="/NeuraChatAi/about">About</RouterLink>
            </nav>
            <Outlet/>

        </>
    )
}

export default App
