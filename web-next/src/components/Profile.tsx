import styles from '../styles/components/Profile.module.css';
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/joaovictor3g.png" alt="Joao" />
        
            <div>
                <strong>João Victor</strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}