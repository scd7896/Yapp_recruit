import * as React from 'react'
import Description from '../../atomic/Description';
import SubDescription from '../../atomic/SubDescription';
interface SubTitleProps {
    generation: number;
    isRecruit: boolean;
    url?: string;
    startDay?: string
}
const SubTitle = ({ generation, isRecruit, url, startDay }: SubTitleProps) => {
    return (
        <article>
            <Description isRecruit={isRecruit} startDay={startDay}/>
            <SubDescription isRecruit={isRecruit} 
                generation={generation} 
                url={url} 
                startDay={startDay} />
        </article>
    )
}

export default SubTitle;