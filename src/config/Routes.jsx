import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catlog from '../pages/Catlog'
import Detail from '../pages/detail/Detail'

const Routes = () => {
    return (
        <Switch>
            <Route path='/:category/search/:keyword' component={Catlog} />
            <Route path='/:category/:id' component={Detail} />
            <Route path='/:category' component={Catlog} />
            <Route path='/' exact component={Home} />
        </Switch>
    )
}

export default Routes