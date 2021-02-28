import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from  '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from '../components/LevelUpModal';

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
    level: number,
    currentExperience: number,
    challengesCompleted: number
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

    const [activeChallenge, setActiceChallenge]= useState(null);

    const experienceToNextLevel = Math.pow((level+1)*4, 2)

    const [isLevelUpModalOpen, setIsLevelModalOpen] = useState(false);

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentExperience, challengesCompleted]);

    function levelUp() {
      setLevel(level+1);
      setIsLevelModalOpen(true);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        
        setActiceChallenge(challenge);

        // new Audio('/notification.mp3').play();

        // if(Notification.permission==='granted') {
        //     new Notification('Novo Desafio', {
        //         body: `Valendo ${challenge.amount}xp`
        //     })
        // }
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
            {isLevelUpModalOpen && <LevelUpModal onClose={() => setIsLevelModalOpen(false)}/>}
        </ChallengesContext.Provider>
    );
}