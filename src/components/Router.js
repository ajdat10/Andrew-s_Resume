import React, { Component } from 'react'
import { Switch, withRouter, Route } from 'react-router-dom'
import Intro from '../pages/Intro'
import Resume from '../pages/Resume'
import Redirect from '../pages/Redirect'
class Router extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route
                        exact path='/'
                        component={() => (
                            <Intro />
                        )}
                    />
                    <Route
                        exact path='/resume'
                        component={() => (
                            <Resume />
                        )}
                    />
                    <Route path='/ajdat10' component={() => {
                        window.location.href = 'https://github.com/ajdat10';
                        return null;
                    }} />
                    <Route path='/andrew-j-cruz' component={() => {
                        window.location.href = 'https://www.linkedin.com/in/andrew-j-cruz/';
                        return null;
                    }} />
                </Switch>

            </main>
        )
    }
}
export default withRouter(Router) 