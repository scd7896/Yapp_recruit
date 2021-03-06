import * as React from 'react';
import './index.scss';

interface IconProps {
    isRecruit: boolean
}

const Icon = ({ isRecruit }: IconProps) => {
    return (
        <article className={`icon-box-container ${isRecruit ? "recruit":"non-recruit"}`} 
            style={{backgroundColor: isRecruit? "#ff0000" : "#f89203"}} >
            {
                isRecruit? <span className="icon-N-text">N</span> : <span style={{fontSize:'18px'}}>⏳</span>
            }
        </article>
    )
}

export default Icon