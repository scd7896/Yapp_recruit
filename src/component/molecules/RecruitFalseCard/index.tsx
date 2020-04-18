import * as React from 'react'
import Card from '../../atomic/Card';
import Title from '../../atomic/Card/CardTitle'
import Description from '../../atomic/Card/CardDescription'
const RecruitFalseCard = () => {
    return (
        <Card>
            <Title>모집기간</Title>
            <Description>YAPP에서는 1년에 두번</Description>
            <Description>(6-7월/1-2월) </Description>
            <Description>열정을 가지고 활동에 함께할</Description> 
            <Description>YAPPian을 모집합니다</Description>
        </Card>
    )
}

export default RecruitFalseCard