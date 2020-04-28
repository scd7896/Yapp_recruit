import * as React from 'react'
import SubTitle from '../../molecules/SubTitle'
import './index.scss'
import RecruitCardContainer from '../../organisms/RecruitCardContainer'
import YappHomeIcon from '../../atomic/YappHomeIcon'
interface RecruitTemplateProps {
    recruitData: recruitDataTypes
}

const RecruitTemplate = ({ recruitData }: RecruitTemplateProps) => {
    return (
        <div>
            <section className="body-section">
                <section className="body-contents-container">
                    <header className="header-section">
                        <a className="yapp-link" href="http://yapp.co.kr/"><YappHomeIcon/> YAPP Homepage</a>
                    </header>
                    <div className="recruit-title-container">
                        <h1 className="recruit-title"><span className="title-R">R</span>ecruit</h1>
                        <SubTitle isRecruit={recruitData.isRecruit}
                            generation={recruitData.generation}
                            url={recruitData.url}
                            startDay={recruitData.startDay} />
                        
                    </div>
                    
                    <p className="how-to-apply-text">How to apply</p>
                    
                    <RecruitCardContainer isRecruit={recruitData.isRecruit}
                        url={recruitData.url}
                        startDay={recruitData.startDay}
                        lastDay={recruitData.lastDay} />
                </section>
            </section>
        </div>
    )
}

export default RecruitTemplate;