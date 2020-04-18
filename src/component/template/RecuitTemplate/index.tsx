import * as React from 'react'
import SubTitle from '../../molecules/SubTitle'
import './index.scss'
import RecruitCardContainer from '../../organisms/RecruitCardContainer'
interface RecruitTemplateProps {
    recruitData: recruitDataTypes
}

const RecruitTemplate = ({ recruitData }: RecruitTemplateProps) => {
    return (
        <div>
            <header className="header-section">
                <a className="yapp-link" href="http://yapp.co.kr/">YAPP Homepage</a>
            </header>
            <section className="body-section">
                <section className="body-contents-container">
                    <div className="recruit-title-container">
                        <h1 className="recruit-title"><span className="title-R">R</span>cruit</h1>
                        <SubTitle isRecruit={recruitData.isRecruit}
                            generation={recruitData.generation}
                            url={recruitData.url}
                            startDay={recruitData.startDay} />
                        
                    </div>
                    <div className="recruit-card-container">
                        <p className="how-to-apply-text">How to apply</p>
                    </div>
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