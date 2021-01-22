import {
    Switch,
    Route,
    HashRouter
} from "react-router-dom";
import NavBar1 from "./Navbar";
import Contact from "./Contact";
import TestHome from "./TestHome";

import {CreateTask} from "./CreateTask";
import RecordTimer from "./RecordTime";
import { AddTask } from "./AddTask";

function Routerfunc() {
    return (

        <HashRouter>
            <NavBar1/>
            <Switch>
            <Route exact path="/record" component={RecordTimer} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/addtask" component={AddTask} />
            <Route exact path="/task" component={CreateTask} />
            <Route exact path="/" component={TestHome} />
            </Switch>
        </HashRouter>
    )
}

export default Routerfunc