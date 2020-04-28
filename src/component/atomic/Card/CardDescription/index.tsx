import * as React from 'react'
import './index.scss';
const CardDescription = ({ children, className="" }) => {
    return(
        <p className={`card-description-text ${className}`} >{ children }</p>
    )
}

export default CardDescription