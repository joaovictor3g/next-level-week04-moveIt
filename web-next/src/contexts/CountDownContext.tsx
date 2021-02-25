import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountDownContextData {
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    active: boolean,
    startCountDown: () => void,
    resetCountDown: () => void
};

interface CountDownProviderProps {
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData);

let countDownTimeOut: NodeJS.Timeout;

export function CountDownProvider({ children }: CountDownProviderProps) {
    const [time, setTime] = useState(0.1*60);
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const { startNewChallenge } = useContext(ChallengesContext);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    function startCountDown() {
        setActive(true);
    }

    function resetCountDown() {
        clearTimeout(countDownTimeOut)
        setActive(false);
        setTime(0.1*60);
        setHasFinished(false);
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
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            active,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountDownContext.Provider>
    );
}