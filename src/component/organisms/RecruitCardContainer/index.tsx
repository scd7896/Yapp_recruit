import * as React from 'react'
import Card from '../../atomic/Card'
import Title from '../../atomic/Card/CardTitle'
import Description from '../../atomic/Card/CardDescription'
import SubDescription from '../../atomic/Card/CardSubDescription'
import RecruitTrueCard from '../../molecules/RecruitTrueCard'
import RecruitFalseCard from '../../molecules/RecruitFalseCard'

import './index.scss';

interface RecruitCardContainerProps {
    startDay?: string,
    lastDay?: string,
    url?: string,
    isRecruit: boolean
}
const RecruitCardContainer = ({ startDay, lastDay, url, isRecruit }: RecruitCardContainerProps) => {
    return (
        <div className="recruit-card-container">
            {
                isRecruit ? <RecruitTrueCard url={url!} startDay={startDay!} lastDay={lastDay!} />:<RecruitFalseCard />
            }
            
            <Card>
                <Title>지원자격</Title>
                <Description className="mobile-block">6개월 동안 활동하는데 </Description>
                <Description className="mobile-block">문제가 없고,</Description> 
                <Description>실력을 키우기 위해 배우려는</Description>
                <Description>의지가 있는 누구나</Description>
                <SubDescription>대학생이 아닌 졸업생, 직장인도 가능합니다</SubDescription>
            </Card>
            <Card>
                <Title>지원방법</Title>
                <Description>1차 서류 </Description>
                <SubDescription>모집 페이지에서 지원서 작성 및 포트폴리오 제출 </SubDescription>
                <Description>2차 면접 후 최종 합격</Description> 
            </Card>
        </div>
    )
}

export default RecruitCardContainer;