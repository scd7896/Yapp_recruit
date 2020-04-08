import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { fire, getFireDB, updatedURL } from '../model/firebase'
import Index from './index'
import Admin from './admin'
const App = () => {
    fire();    
    return(
        <BrowserRouter>
            <Route exact path="/recruit" component={Index} />
            <Route path="/recruit/admin" component={Admin} />
            
        </BrowserRouter>
    )
}

export default App;