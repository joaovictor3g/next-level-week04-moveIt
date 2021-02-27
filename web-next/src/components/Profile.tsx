import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level  } = useContext(ChallengesContext);
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={theme==='dark' ? `${styles.profileContainer} ${styles.profileContainerDark}`: styles.profileContainer }>
            <img src={window.sessionStorage.getItem('avatar_url')} alt="Joao" />
        
            <div>
                <strong>{window.sessionStorage.getItem('name')}</strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}