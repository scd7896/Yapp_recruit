import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { fire, getFireDB, updatedURL } from '../model/firebase'
import Index from './index'
import Admin from './admin'
const App = () => {
    const [recruitData, setRecruitData] = useState('');
    fire();
    const onUpdate = () => {
        updatedURL()
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.error(err);
            })
    }
    useEffect(()=>{
        getFireDB()
            .then((res)=>{
                setRecruitData(res.val()['recruit-data'])
            })
    },[])
    
    return(
        <BrowserRouter>
            <Route exact path="/recruit" component={Index} />
            <Route path="/recruit/admin" component={Admin} />
            <button onClick={onUpdate}>업데이트하기</button>
        </BrowserRouter>
    )
}

export default App;