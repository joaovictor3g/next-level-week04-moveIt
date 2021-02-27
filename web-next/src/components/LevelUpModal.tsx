import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

interface LevelUpModalProps {
    onClose: () => void;
}

export function LevelUpModal({ onClose }: LevelUpModalProps) {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>

                <button type="button" onClick={onClose}>
                    <img src="icons/close.svg" />
                </button>
            </div>
        </div>
    );
}