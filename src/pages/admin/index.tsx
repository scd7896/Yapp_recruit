import * as React from 'react';
import { useState, useEffect } from 'react';

import './index.scss';
const Admin = (props) => {
    const [loading, setLoading] = useState(true) 
    console.log('페이지컴포넌트',props);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 2000)
    },[])
    return(
        <div>
            
        </div>
    )
}

export default Admin;