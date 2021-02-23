import { useState, useEffect } from 'react';
import styles from '../styles/components/CountDown.module.css';
import { Button } from './Button';

export function CountDown() {
    const [time, setTime] = useState(0.1*60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    const [minuteLeft, minuteRight] = String(minutes)
        .padStart(2, '0')
        .split('');

    const [secondLeft, secondRight] = String(seconds)
        .padStart(2, '0')
        .split('');


    function startCountDown() {
        setActive(!active);
    }

    useEffect(() => {
        if(active && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
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

            {
                time != 0 ?
                    (active ?
                        <Button 
                            onClick={startCountDown}
                            className={styles.countDownButtonGiveUp}
                            
                        >
                            Abandonar cliclo
                            <img src={"icons/close.svg"} alt="img" />
                        </Button>
                        :       
                        <Button 
                            onClick={startCountDown}
                            className={styles.countDownButtonStart}
                        >
                            Iniciar ciclo
                        </Button>)
                        :   
                        (<Button 
                            className={styles.countDownButtonFinalized}
                        >
                            Ciclo finalizado
                            <div />
                        </Button>)
            }
        </div>
    )
}
