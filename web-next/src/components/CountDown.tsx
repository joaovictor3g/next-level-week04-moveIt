import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CountDown.module.css';
import { Button } from './Button';

let countDownTimeOut: NodeJS.Timeout;

export function CountDown() {
    const [time, setTime] = useState(0.1*60);
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const { startNewChallenge } = useContext(ChallengesContext);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    const [minuteLeft, minuteRight] = String(minutes)
        .padStart(2, '0')
        .split('');

    const [secondLeft, secondRight] = String(seconds)
        .padStart(2, '0')
        .split('');


    function startCountDown() {
        setActive(true);
    }

    function resetCountDown() {
        clearTimeout(countDownTimeOut)
        setActive(false);
        setTime(0.1*60);
    }

    useEffect(() => {
        if(active && time > 0) {
            countDownTimeOut = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if(active && time === 0) {
            setHasFinished(true);
            setActive(false);
            startNewChallenge();
        }
    }, [active, time]);

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
