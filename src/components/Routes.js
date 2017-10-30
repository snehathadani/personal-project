import React,{Component} from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Explore from './Explore'

class Routes extends Component {
    render() {
        return(
            <main>
                <Switch>
                    <Route exact path = '/' component={Home}/>
                    <Route exact path = '/explore' component={Explore}/>
                </Switch>
            </main>
            
        );
    }
}
export default Routes;
