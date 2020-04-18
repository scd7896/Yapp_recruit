import * as React from 'react'
import Card from '../../atomic/Card/index'
import Title from '../../atomic/Card/CardTitle'
import Description from '../../atomic/Card/CardDescription'
import RecruitButton from '../../atomic/RecruitButton'
interface RecruitTrueCardProps {
    startDay?: string;
    lastDay?: string
    url?: string
}
const RecruitTrueCard = ({ url, startDay, lastDay }: RecruitTrueCardProps) => {
    return (
        <Card>
            <Title>모집기간</Title>
            <div style={{marginBottom: '26px'}}>
                <Description>{startDay} - {lastDay}</Description>
                <Description>신입기수를 모집합니다</Description>
            </div>
            <RecruitButton url={url}/>    
        </Card>
    )
}

export default RecruitTrueCard;