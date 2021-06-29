import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Harrypotter from '../pages/Harrypotter'
import Home from '../pages/Home'
import Simpsons from '../pages/Simpsons'


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'component={Home} />
                <Route path='/'component={Simpsons} />
                <Route path='/'component={Harrypotter} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes