import * as React from 'react'
import './index.scss'

const CardTitle = ({children}) => {
    return (
        <p className="card-title-contents">{ children }</p>
    )
}

export default CardTitle