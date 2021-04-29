import React, { Component } from 'react'
import { Switch, withRouter, Route } from 'react-router-dom'
import Intro from '../pages/Intro'
import Resume from '../pages/Resume'
class Router extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route
                        exact path = '/'
                        component={()=> (
                            <Intro/>
                        )}
                    />
                    <Route
                    exact path = '/resume'
                    component = {() => (
                        <Resume/>
                    )}
                    />
                </Switch>

            </main>
        )
    }
}
export default withRouter(Router) 