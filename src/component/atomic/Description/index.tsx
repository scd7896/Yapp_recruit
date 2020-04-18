import * as React from 'react';
import Icon from '../Icon'
import './index.scss';

interface DescriptionProps {
    isRecruit: boolean,
    startDay?: string
}

const Description = ({ isRecruit, startDay }: DescriptionProps) => {
    const text = isRecruit? `${startDay}부터 신입기수를 모집합니다` : "지금은 모집기간이 아닙니다"; 
    return (
        <p className="description-title">
            {text}
            <Icon isRecruit={isRecruit}/>
        </p>
    )
}

export default Description