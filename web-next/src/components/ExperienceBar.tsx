import React, { useState } from 'react'
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const [hover, setHover] = useState(false);

    function onMouseOver() {
        setHover(true);
    }

    function onMouseLeave() {
        setHover(false);
    }

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div 
                onMouseOver={onMouseOver} 
                onMouseLeave={onMouseLeave}
                style={hover ? { height: 10 } : {}}
            >
                <div 
                    style={hover ? { width: '50%', height: 10 } : { width: '50%', height: 4 }} 
                />
                {hover &&
                    <span style={{ left: '50%' }} className={styles.currentExperience}>300 xp</span>
                }
            </div>
            <span>600 xp</span>
        </header>
    )
}

