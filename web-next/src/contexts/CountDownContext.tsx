import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountDownContextData {
    time: number;
    minutes: number,
    seconds: number,
    widthVarying: number;
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
    let persistTime = Number((100/(0.1*60)).toFixed(2));
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const { startNewChallenge } = useContext(ChallengesContext);

    const minutes = Math.floor(time/60);
    const seconds = time%60; //=360

    const [widthVarying, setWidthVarying] = useState(0);

    function startCountDown() {
        setActive(true);
    }

    function resetCountDown() {
        clearTimeout(countDownTimeOut)
        setActive(false);
        setTime(0.1*60);
        setHasFinished(false);
        setWidthVarying(0);
    }
    
    useEffect(() => {        
        if(active && time > 0) {
            countDownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        
            
        } else if(active && time === 0) {
            setWidthVarying(0);
            setHasFinished(true);
            setActive(false);
            startNewChallenge();
        }
    }, [active, time]);

    useEffect(() => {
        if(!active) 
            setWidthVarying(0);
        else if(widthVarying<=100) {
            setWidthVarying(widthVarying+persistTime);
            console.log(persistTime + widthVarying);
        }
       
    }, [time, active])
    
    return (
        <CountDownContext.Provider value={{
            time,
            minutes,
            seconds,
            widthVarying,
            hasFinished,
            active,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountDownContext.Provider>
    );
}