import * as React from 'react'
import './index.scss';
interface SubDescription {
    generation: number;
    isRecruit: boolean;
    url?: string;
    startDay?: string
}

const SubDescription = ({ generation, isRecruit, url, startDay }: SubDescription) => {
    const text = isRecruit ? `현재 ${generation}기 신입회원 서류접수 중` : `현재 ${generation}기 활동 중!`;
    return(
        <article>
            <span className="subdescription-text">{ text }</span>
            <span className="subdescription-link">
                { isRecruit ? <a href={url}> 지원하기></a> : <span> 다음 기수는 {startDay}에 예정되어 있습니다</span> }
            </span>
        </article>
    )
}

export default SubDescription