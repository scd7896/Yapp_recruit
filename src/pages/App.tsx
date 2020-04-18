import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { fire, getFireDB, updatedURL } from '../model/firebase'
import Index from './index'
const App = () => {
    fire();    
    return(
        <BrowserRouter>
            <Route exact path="/recruit" component={Index} />
        </BrowserRouter>
    )
}

export default App;