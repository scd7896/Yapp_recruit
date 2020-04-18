import * as React from 'react'
import './index.scss'
interface RecruitButtonProps {
    url: string
}
const RecruitButton = ({ url }: RecruitButtonProps) => {
    return (
        <div>
            <a href={url}>
                <button className="recruit-button">
                    지원하기
                </button>
            </a>
        </div>
    )
}

export default RecruitButton;