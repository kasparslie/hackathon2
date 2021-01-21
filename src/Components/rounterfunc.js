import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavBar1 from "./Navbar";
import TestHome from "./TestHome";
import TestTask from "./TestTask";
import TestContact from "./TestContact";




function Routerfunc() {
    return (

        <Router>
            <NavBar1/>
            <Switch>
            <Route exact path="/contact" component={TestContact} />
            <Route exact path="/task" component={TestTask} />
            <Route exact path="/" component={TestHome} />
            </Switch>
        </Router>
    )
}

export default Routerfunc