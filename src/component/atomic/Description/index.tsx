import * as React from 'react';
import Icon from '../Icon'
import './index.scss';

interface DescriptionProps {
    isRecruit: boolean,
    startDay?: string
}

const Description = ({ isRecruit, startDay }: DescriptionProps) => {
    const text = isRecruit? (
        <p>
            <span>{startDay}부터</span> 
            <span>신입기수를</span> 
            <span>모집합니다</span>
        </p> ) : 
        <p><span>지금은 모집기간이</span><span>아닙니다</span></p>; 
    return (
        <article className="description-title">
            {text}
            <Icon isRecruit={isRecruit}/>
        </article>
    )
}

export default Description