import * as React from 'react';
import { useState, useEffect } from 'react';
import Test from '../../component/atomic/Test'
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
            {
                !loading ? (
                    <Test />
                ) : (
                    <div className="loading-wrapper">
                        <div className="loading-bar"></div>
                    </div>
                )
            }
        </div>
    )
}

export default Admin;