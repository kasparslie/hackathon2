import {
    Switch,
    Route,
    HashRouter
} from "react-router-dom";
import NavBar1 from "./Navbar";
import TestTask from "./TestTask";
import TestContact from "./TestContact";
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
            <Route exact path="/contact" component={TestContact} />
            <Route exact path="/addtask" component={AddTask} />
            <Route exact path="/task" component={CreateTask} />
            <Route exact path="/" component={TestHome} />
            </Switch>
        </HashRouter>
    )
}

export default Routerfunc