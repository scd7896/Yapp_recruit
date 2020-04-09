import * as React from "react";
import { useState, useEffect } from "react";
import HeaderButton from "../../component/atomic/HeaderButton";
import Card from "../../component/atomic/Card";
import { getFireDB } from "../../model/firebase";
import "./Index.scss";
type recruitDataTypes = {
    startDay: string;
    generation: number;
    isRecruit: boolean;
    lastDay: string;
    notionURL: string;
    url: string;
};
const Index = () => {
    const [recruitData, setRecruitData] = useState<recruitDataTypes>({
        startDay: "test",
        generation: 16,
        isRecruit: false,
        lastDay: "lastday",
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
            <div className="contents-container">
                <div className="contents-header-container">
                    <h1>Recruit</h1>
                    <div>{recruitData && <span>{recruitData.startDay}부터 신입기수를 모집합니다</span>}</div>
                    <div>
                        {recruitData && (
                            <HeaderButton generation={recruitData.generation} isRecruit={recruitData.isRecruit} />
                        )}
                    </div>
                </div>
                <div className="contents-body-container">
                    <div className="contents-body-description">
                        <p><span>YAPP에서는</span> 1년에 두번(6월~7월/1~2월) 열정을 가지고</p>
                        <p>활동에 함께할 Yappian<span>을 모집합니다.</span></p>
                    </div>
                    <div className="contents-body-card-container">
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
