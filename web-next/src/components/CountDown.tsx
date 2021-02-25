import { useContext } from 'react';
import styles from '../styles/components/CountDown.module.css';
import { Button } from './Button';
import { CountDownContext } from '../contexts/CountDownContext';

export function CountDown() {
    const { 
        minutes, 
        seconds,
        hasFinished,
        active,
        startCountDown,
        resetCountDown
    } = useContext(CountDownContext)

    const [minuteLeft, minuteRight] = String(minutes)
        .padStart(2, '0')
        .split('');

    const [secondLeft, secondRight] = String(seconds)
        .padStart(2, '0')
        .split('');


    

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ?
                (<Button
                    disabled 
                    className={styles.countDownButton}
                >
                    Ciclo finalizado
                    <div />
                </Button>
            ): (
                active ?
                   (<Button 
                       type="button"
                       onClick={resetCountDown}
                       className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                   >
                       Abandonar cliclo
                       <img src={"icons/close.svg"} alt="img" />
                   </Button>
                   ) : (      
                   <Button 
                       type="button"
                       onClick={startCountDown}
                       className={styles.countDownButton}
                   >
                       Iniciar ciclo
                   </Button>) 
            )}
        </div>
    )
}
