import React, { Component } from 'react'
import { Switch, withRouter, Route } from 'react-router-dom'
import Intro from '../pages/Intro'
class Router extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route>
                        <Intro></Intro>
                    </Route>
                </Switch>

            </main>
        )
    }
}
export default withRouter(Router) 