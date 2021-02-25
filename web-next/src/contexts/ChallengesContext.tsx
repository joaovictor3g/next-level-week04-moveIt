import { emit } from 'process';
import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from  '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    completeChallenge: () => void;
};

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiceChallenge]= useState(null);

    const experienceToNextLevel = Math.pow((level+1)*4, 2)

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    function levelUp() {
      setLevel(level+1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        
        setActiceChallenge(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission==='granted') {
            new Notification('Novo Desafio', {
                body: `Valendo ${challenge.amount}xp`
            })
        }
    }

    function resetChallenge() {
        setActiceChallenge(null);
    }

    function completeChallenge() {
        if(!activeChallenge)
            return;
        
        const { amount } = activeChallenge;

        let finalExperience = currentExperience+amount;
    
        if(finalExperience >= experienceToNextLevel) {
            finalExperience-=experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiceChallenge(null);
        setChallengesCompleted(challengesCompleted+1);
    }

    return (
        <ChallengesContext.Provider 
            value={{ 
                level, 
                levelUp,
                currentExperience,
                challengesCompleted,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                completeChallenge
                
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}