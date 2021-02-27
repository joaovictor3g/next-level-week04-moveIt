import React, { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const [hover, setHover] = useState(false);

    function onMouseOver() {
        setHover(true);
    }

    function onMouseLeave() {
        setHover(false);
    }

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    const { theme } = useContext(ThemeContext);

    const progress = (Math.round(currentExperience *100)/experienceToNextLevel);

    return (
        <header className={theme==='dark' ? `${styles.experienceBar} ${styles.experienceBarDark}`: styles.experienceBar}>
            <span>0 xp</span>
            <div 
                onMouseOver={onMouseOver} 
                onMouseLeave={onMouseLeave}
                style={hover ? { height: 10 } : {}}
            >
                <div 
                    style={hover ? { width: `${progress}%`, height: 10 } : { width: `${progress}%`, height: 4 }} 
                />
                {hover &&
                    <span style={{ left: `${progress}%` }} className={styles.currentExperience}>{currentExperience} xp</span>
                }
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}

