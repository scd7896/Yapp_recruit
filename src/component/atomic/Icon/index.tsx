import * as React from 'react';
import './index.scss';

interface IconProps {
    isRecruit: boolean
}

const Icon = ({ isRecruit }: IconProps) => {
    return (
        <article className="icon-box-container" style={{backgroundColor: isRecruit? "#ff0000" : "#f89203"}}>
            
        </article>
    )
}

export default Icon