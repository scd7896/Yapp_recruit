import * as React from 'react'
import Card from '../../atomic/Card'
import RecruitButton from '../../atomic/RecruitButton'
import Icon from '../../atomic/Icon'
import SubTitle from '../../molecules/SubTitle'
import './index.scss'
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
                    <Card> 
                        helo world
                    </Card>
                    <RecruitButton url={recruitData.url} />
                    
                    
                </section>
            </section>
        </div>
    )
}

export default RecruitTemplate;