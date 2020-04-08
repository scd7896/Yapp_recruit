import * as React from 'react'
type PropsType = {
    generation: number
}
const HeaderButton = ({ generation }: PropsType) => {
    return (
        <div>
            <span>현재 {generation}기 모집 중</span>
        </div>
    )
}

export default HeaderButton;