import React, { useState } from 'react'

import './styles.css';

export function ExperienceBar() {
    const [hover, setHover] = useState(false);

    function onHover() {
        setHover(true);
    }

    function onMouseLeave() {
        setHover(false);
    }

    return (
        <header className="experience-bar">
            <span>0 xp</span>
            <div 
                onMouseOver={onHover} 
                onMouseLeave={onMouseLeave}
                style={hover ? { height: 10 } : {}}
            >
                <div 
                    style={hover ? { width: '50%', height: 10 } : { width: '50%', height: 4 }} 
                />
                {hover &&
                    <span style={{ left: '50%' }} className="current-experience">300 xp</span>
                }
            </div>
            <span>600 xp</span>
        </header>
    )
}

