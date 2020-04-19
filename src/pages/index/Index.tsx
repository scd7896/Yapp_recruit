import * as React from "react";
import { useState, useEffect } from "react";
import { getFireDB } from "../../model/firebase";

import RecruitTemplate from '../../component/template/RecuitTemplate'
import "./Index.scss";

const Index = () => {
    const [recruitData, setRecruitData] = useState<recruitDataTypes>();
    useEffect(()=>{
        getFireDB()
            .then((res)=>{
                setRecruitData(res.val()['recruit-data'])
            })
    },[])
    return (
        <div className="index-container">
            {recruitData && <RecruitTemplate recruitData={recruitData} />}
        </div>
    );
};

export default Index;
