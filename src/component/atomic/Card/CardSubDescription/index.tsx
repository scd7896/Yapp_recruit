import * as React from 'react'
import './index.scss'
const CardSubDescription = ({ children }) => {
    return (
        <p className="card-subdescription-text">{ children }</p>
    )
}

export default CardSubDescription;