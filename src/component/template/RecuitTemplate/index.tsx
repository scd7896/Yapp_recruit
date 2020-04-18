import * as React from 'react'
import Card from '../../atomic/Card'
import RecruitButton from '../../atomic/RecruitButton'
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
            <section>

            </section>
            <Card> 
                helo world
            </Card>
            <RecruitButton url={recruitData.url} />
        </div>
    )
}

export default RecruitTemplate;