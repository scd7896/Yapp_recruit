import * as React from 'react';
import { useState, useEffect } from 'react';
import HeaderButton from '../../component/atomic/HeaderButton'
import { getFireDB } from '../../model/firebase';
import './Index.scss';
const Index = () => {
    const [recruitData, setRecruitData] = useState('');
    useEffect(()=>{
        getFireDB()
            .then((res)=>{
                setRecruitData(res.val()['recruit-data'])
            })
    },[])
    return(
        <div className="index-container">
            <div className="contents-container">
                <h1>Recruit</h1>
                <div>
                    { recruitData && <span>{recruitData}일부터 신입기수를 모집합니다</span> }
                </div>
                <div>
                    <HeaderButton generation={17} />
                </div>
            </div>
        </div>
    )
}

export default Index;