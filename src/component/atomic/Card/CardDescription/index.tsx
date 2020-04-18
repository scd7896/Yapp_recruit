import * as React from 'react'
import './index.scss';
const CardDescription = ({ children }) => {
    return(
        <p className="card-description-text">{ children }</p>
    )
}

export default CardDescription