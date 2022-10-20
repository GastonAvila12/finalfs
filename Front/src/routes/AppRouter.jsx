import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HomePage from "../Pages/homePage"
import Navbar from "../components/Navbar"
   

const appRouter = () => {
    return (
    <Router>
        <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/" component={Navbar} />
           
        </Switch>
    </Router>

    )

}

export default appRouter;