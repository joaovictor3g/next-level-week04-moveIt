import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level  } = useContext(ChallengesContext);
    const { theme } = useContext(ThemeContext);
    const [name, setName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    
    useEffect(() => { 
        setName(sessionStorage.getItem('name'))
        setAvatarUrl(sessionStorage.getItem('avatar_url'))
    }, []);

    return (
        <div className={theme==='dark' ? `${styles.profileContainer} ${styles.profileContainerDark}`: styles.profileContainer }>
            <img src={avatarUrl} alt="Joao" />
        
            <div>
                <strong>{name}</strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}