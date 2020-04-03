import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './index'
import Admin from './admin'
const App = () => {
    return(
        <BrowserRouter>
            <Route exact path="/recruit" component={Index} />
            <Route path="/recruit/admin" component={Admin} />
        </BrowserRouter>
    )
}

export default App;