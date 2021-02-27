import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div 
            className={
                theme==='dark' ? 
                `${styles.completedChallengesContainer} ${styles.completedChallengesContainerDark}`
                : styles.completedChallengesContainer}
            >
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}