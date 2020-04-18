import * as React from "react";
import { useState, useEffect } from "react";
import { getFireDB } from "../../model/firebase";

import RecruitTemplate from '../../component/template/RecuitTemplate'
import "./Index.scss";

const Index = () => {
    const [recruitData, setRecruitData] = useState<recruitDataTypes>({
        startDay: "09월 17일",
        generation: 16,
        isRecruit: true,
        lastDay: "10월 02일",
        notionURL: "www.naver.com",
        url: "www.naver.com"
    });
    // useEffect(()=>{
    //     getFireDB()
    //         .then((res)=>{
    //             console.log(res.val()['recruit-data'])
    //             setRecruitData(res.val()['recruit-data'])
    //         })
    // },[])
    return (
        <div className="index-container">
            <RecruitTemplate recruitData={recruitData} />
        </div>
    );
};

export default Index;
