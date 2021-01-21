import {
    Switch,
    Route,
    HashRouter
} from "react-router-dom";
import NavBar1 from "./Navbar";
import TestHome from "./TestHome";
import TestTask from "./TestTask";
import TestContact from "./TestContact";




function Routerfunc() {
    return (

        <HashRouter>
            <NavBar1/>
            <Switch>
            <Route exact path="/contact" component={TestContact} />
            <Route exact path="/task" component={TestTask} />
            <Route exact path="/" component={TestHome} />
            </Switch>
        </HashRouter>
    )
}

export default Routerfunc